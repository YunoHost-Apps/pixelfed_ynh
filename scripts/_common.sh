#!/bin/bash

ynh_install_php7 () {
  wget -q -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
  echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/php7.list

  ynh_package_update
}

ynh_remove_php7 () {
  rm -f /etc/apt/sources.list.d/php7.list
  apt-key del 4096R/89DF5277
  apt-key del 2048R/11A06851
}


# Execute a command as another user
# usage: exec_as USER COMMAND [ARG ...]
exec_as() {
	local USER=$1
	shift 1

	if [[ $USER = $(whoami) ]]
	then
		eval $@
	else
		sudo -u "$USER" $@
	fi
}

# Execute a composer command from a given directory
# usage: composer_exec AS_USER WORKDIR COMMAND [ARG ...]
exec_composer() {
	local AS_USER=$1
	local WORKDIR=$2
	shift 2

	exec_as "$AS_USER" COMPOSER_HOME="${WORKDIR}/.composer" \
		php7.1 "${WORKDIR}/composer.phar" $@ \
		-d "${WORKDIR}" --quiet --no-interaction
}

# Install and initialize Composer in the given directory
# usage: init_composer destdir
init_composer() {
	local AS_USER=$1
	local WORKDIR=$2

	# install composer
	curl -sS https://getcomposer.org/installer \
		| COMPOSER_HOME="${WORKDIR}/.composer" \
		php7.1 -- --quiet --install-dir="$WORKDIR" \
		|| ynh_die "Unable to install Composer"


	# update dependencies to create composer.lock
	exec_composer "$AS_USER" "$WORKDIR" install --no-dev \
		|| ynh_die "Unable to update core dependencies with Composer"
}


# Create a dedicated php-fpm config for php7.1
#
# usage: ynh_add_fpm_config
ynh_add_php71-fpm_config () {
	finalphpconf="/etc/php/7.1/fpm/pool.d/$app.conf"
	ynh_backup_if_checksum_is_different "$finalphpconf"
	cp ../conf/php-fpm.conf "$finalphpconf"
	ynh_replace_string "__NAMETOCHANGE__" "$app" "$finalphpconf"
	ynh_replace_string "__FINALPATH__" "$final_path" "$finalphpconf"
	ynh_replace_string "__USER__" "$app" "$finalphpconf"
	chown root: "$finalphpconf"
	ynh_store_file_checksum "$finalphpconf"

	if [ -e "../conf/php-fpm.ini" ]
	then
		finalphpini="/etc/php/7.1/fpm/conf.d/20-$app.ini"
		ynh_backup_if_checksum_is_different "$finalphpini"
		cp ../conf/php-fpm.ini "$finalphpini"
		chown root: "$finalphpini"
		ynh_store_file_checksum "$finalphpini"
	fi

	systemctl reload php7.1-fpm
}


# Remove the dedicated php-fpm config for php7.1
#
# usage: ynh_remove_fpm_config
ynh_remove_php71-fpm_config () {
	ynh_secure_remove "/etc/php/7.1/fpm/pool.d/$app.conf"
	ynh_secure_remove "/etc/php/7.1/fpm/conf.d/20-$app.ini" 2>&1
	systemctl reload php7.1-fpm
}
