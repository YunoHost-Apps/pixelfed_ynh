#!/bin/bash

#=================================================
# COMMON VARIABLES AND CUSTOM HELPERS
#=================================================

composer_version="2.2.21"

# Create a dedicated supervisor config
#
# usage: ynh_add_supervisor_config [--service=service] [--template=template]
# | arg: -s, --service=     - Service name (optionnal, `$app` by default)
# | arg: -t, --template=    - Name of template file (optionnal, this is 'supervisor' by default, meaning ./conf/supervisor.service will be used as template)
#
# This will use the template `../conf/<templatename>.service`.
#
# See the documentation of `ynh_config_add` for a description of the template
# format and how placeholders are replaced with actual variables.
#
# Requires YunoHost version 2.7.11 or higher.
ynh_add_supervisor_config () {
    # Declare an array to define the options of this helper.
    #REMOVEME? local legacy_args=stv
    local -A args_array=( [s]=service= [t]=template= [v]=others_var=)
    local service
    local template
    local others_var
    # Manage arguments with getopts
    ynh_handle_getopts_args "$@"
    local service="${service:-$app}"
    local template="${template:-supervisor.service}"
    others_var="${others_var:-}"

    [[ -z "$others_var" ]] || ynh_print_warn "Packagers: using others_var is unecessary since Yunohost 4.2"

    ynh_config_add --template="$YNH_APP_BASEDIR/conf/$template" --destination="/etc/supervisor/conf.d/$service.conf"

    supervisorctl reread
    supervisorctl update
}

# Remove the dedicated supervisor config
#
# usage: ynh_remove_supervisor_config [--service=service]
# | arg: -s, --service=     - Service name (optionnal, $app by default)
#
# Requires YunoHost version 2.7.2 or higher.
ynh_remove_supervisor_config () {
    # Declare an array to define the options of this helper.
    #REMOVEME? local legacy_args=s
    local -A args_array=( [s]=service= )
    local service
    # Manage arguments with getopts
    ynh_handle_getopts_args "$@"
    local service="${service:-$app}"

    local finalsupervisorconf="/etc/supervisor/conf.d/$service.conf"
    if [ -e "$finalsupervisorconf" ]
    then
        ynh_supervisor_action --service=$service --action=stop
        ynh_safe_rm "$finalsupervisorconf"
        supervisorctl reread
        supervisorctl update
    fi
}

# Start (or other actions) a service,  print a log in case of failure and optionnaly wait until the service is completely started
#
# usage: ynh_supervisor_action [--service=service_name] [--action=action] [ [--wait_until="line to match"] [--log_path=log_path] [--timeout=300] [--length=20] ]
# | arg: -n, --service= - Name of the service to start. Default : `$app`
# | arg: -a, --action=       - Action to perform with supervisorctl. Default: start
# | arg: -l, --wait_until=   - Line to match - The line to find in the log to attest the service have finished to boot. If not defined it don't wait until the service is completely started.
# | arg: -p, --log_path=     - Log file - Path to the log file. Default : `/var/log/$app/$app.log`
# | arg: -t, --timeout=      - Timeout - The maximum time to wait before ending the watching. Default : 300 seconds.
# | arg: -e, --length=       - Length of the error log : Default : 20
#
# Requires YunoHost version 3.5.0 or higher.
ynh_supervisor_action() {
    # Declare an array to define the options of this helper.
    #REMOVEME? local legacy_args=nalpte
    declare -Ar args_array=( [n]=service_name= [a]=action= [l]=line_match= [p]=log_path= [t]=timeout= [e]=length= )
    local service_name
    local action
    local line_match
    local length
    local log_path
    local timeout
    # Manage arguments with getopts
    ynh_handle_getopts_args "$@"
    service_name="${service_name:-$app}"
    action=${action:-start}
    line_match=${line_match:-}
    length=${length:-20}
    log_path="${log_path:-/var/log/$service_name/$service_name.log}"
    timeout=${timeout:-300}

    # Start to read the log
    if [[ -n "$line_match" ]]
    then
        local templog="$(mktemp)"
        # Following the starting of the app in its log
        if [ "$log_path" == "systemd" ]
        then
            # Read the supervisor journal
            journalctl --unit=supervisor --follow --since=-0 --quiet > "$templog" &
            # Get the PID of the journalctl command
            local pid_tail=$!
        else
            # Read the specified log file
            tail --follow=name --retry --lines=0 "$log_path" > "$templog" 2>&1 &
            # Get the PID of the tail command
            local pid_tail=$!
        fi
    fi

    # Use reload-or-restart instead of reload. So it wouldn't fail if the service isn't running.
    if [ "$action" == "reload" ]; then
        action="update"
    fi

    # If the service fails to perform the action
    if ! supervisorctl $action $service_name
    then
        # Show syslog for this service
        ynh_exec_err journalctl --quiet --no-hostname --no-pager --lines=$length --unit=$service_name
        # If a log is specified for this service, show also the content of this log
        if [ -e "$log_path" ]
        then
            ynh_exec_err tail --lines=$length "$log_path"
        fi
        ynh_clean_check_starting
        return 1
    fi

    # Start the timeout and try to find line_match
    if [[ -n "${line_match:-}" ]]
    then
        set +x
        local i=0
        for i in $(seq 1 $timeout)
        do
            # Read the log until the sentence is found, that means the app finished to start. Or run until the timeout
            if grep --extended-regexp --quiet "$line_match" "$templog"
            then
                ynh_print_info "The service $service_name has correctly executed the action ${action}."
                break
            fi
            if [ $i -eq 3 ]; then
                echo -n "Please wait, the service $service_name is ${action}ing" >&2
            fi
            if [ $i -ge 3 ]; then
                echo -n "." >&2
            fi
            sleep 1
        done
        set -x
        if [ $i -ge 3 ]; then
            echo "" >&2
        fi
        if [ $i -eq $timeout ]
        then
            ynh_print_warn "The service $service_name didn't fully executed the action ${action} before the timeout."
            ynh_print_warn "Please find here an extract of the end of the log of the service $service_name:"
            ynh_exec_warn journalctl --quiet --no-hostname --no-pager --lines=$length --unit=$service_name
            if [ -e "$log_path" ]
            then
                ynh_print_warn "\-\-\-"
                ynh_exec_warn tail --lines=$length "$log_path"
            fi
        fi
        ynh_clean_check_starting
    fi
}
