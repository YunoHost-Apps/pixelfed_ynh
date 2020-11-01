#!/bin/bash

#=================================================
# COMMON VARIABLES
#=================================================

# dependencies used by the app
pkg_dependencies="postgresql redis-server imagemagick jpegoptim optipng pngquant supervisor"

YNH_PHP_VERSION="7.3"

extra_php_dependencies="php${YNH_PHP_VERSION}-bcmath php${YNH_PHP_VERSION}-cli php${YNH_PHP_VERSION}-ctype php${YNH_PHP_VERSION}-curl php${YNH_PHP_VERSION}-exif php${YNH_PHP_VERSION}-gd php${YNH_PHP_VERSION}-iconv php${YNH_PHP_VERSION}-intl php${YNH_PHP_VERSION}-json php${YNH_PHP_VERSION}-mbstring php${YNH_PHP_VERSION}-tokenizer php${YNH_PHP_VERSION}-simplexml php${YNH_PHP_VERSION}-xml php${YNH_PHP_VERSION}-zip php${YNH_PHP_VERSION}-pgsql php${YNH_PHP_VERSION}-fileinfo php${YNH_PHP_VERSION}-pdo php${YNH_PHP_VERSION}-imagick php${YNH_PHP_VERSION}-redis"

#=================================================
# PERSONAL HELPERS
#=================================================

#=================================================
# EXPERIMENTAL HELPERS
#=================================================

#=================================================
# FUTURE OFFICIAL HELPERS
#=================================================
