#!/bin/bash

#=================================================
# COMMON VARIABLES
#=================================================

# dependencies used by the app
pkg_dependencies="postgresql redis-server libgd3 jpegoptim optipng pngquant ffmpeg imagemagick supervisor"

YNH_PHP_VERSION="7.3"

YNH_COMPOSER_VERSION="2.1.5"

extra_php_dependencies="php${YNH_PHP_VERSION}-bcmath php${YNH_PHP_VERSION}-cli php${YNH_PHP_VERSION}-ctype php${YNH_PHP_VERSION}-curl php${YNH_PHP_VERSION}-exif php${YNH_PHP_VERSION}-gd php${YNH_PHP_VERSION}-iconv php${YNH_PHP_VERSION}-intl php${YNH_PHP_VERSION}-json php${YNH_PHP_VERSION}-mbstring php${YNH_PHP_VERSION}-redis php${YNH_PHP_VERSION}-tokenizer php${YNH_PHP_VERSION}-xml php${YNH_PHP_VERSION}-zip php${YNH_PHP_VERSION}-pdo php${YNH_PHP_VERSION}-pgsql php${YNH_PHP_VERSION}-fileinfo php${YNH_PHP_VERSION}-imagick"

#=================================================
# PERSONAL HELPERS
#=================================================

#=================================================
# EXPERIMENTAL HELPERS
#=================================================

#=================================================
# FUTURE OFFICIAL HELPERS
#=================================================
