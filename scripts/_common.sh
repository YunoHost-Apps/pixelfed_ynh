#!/bin/bash

#=================================================
# COMMON VARIABLES AND CUSTOM HELPERS
#=================================================

composer_version="2.8.4"

# Define a function to execute commands with `exec_artisan`
exec_artisan() {
  (cd "$install_dir" && ynh_exec_as_app php${php_version} artisan)
}

# Define a function to execute commands with `exec_artisan_as_root`
exec_artisan_as_root() {
  (cd "$install_dir" && php${php_version} artisan)
}

