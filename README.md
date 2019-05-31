# Pixelfed for YunoHost

[![Integration level](https://dash.yunohost.org/integration/pixelfed.svg)](https://dash.yunohost.org/appci/app/pixelfed)  
[![Install pixelfed with YunoHost](https://install-app.yunohost.org/install-with-yunohost.png)](https://install-app.yunohost.org/?app=pixelfed)

> *This package allow you to install pixelfed quickly and simply on a YunoHost server.  
If you don't have YunoHost, please see [here](https://yunohost.org/#/install) to know how to install and enjoy it.*

## Overview
The federated image sharing service Pixelfed, for YunoHost

**Shipped version:** 0.9.0

## Important points to read before installing

1. **Pixelfed** require a dedicated **root domain**, eg. pixelfed.domain.tld

## Screenshots

![](https://camo.githubusercontent.com/c1c2e74057dcff57e103fcbb3239840802fcf752/68747470733a2f2f706978656c6665642e6e7963332e63646e2e6469676974616c6f6365616e7370616365732e636f6d2f6d656469612f53637265656e25323053686f74253230323031392d30322d30352532306174253230362e33342e3539253230504d2e706e67)

## Configuration

### Administrator

After being first registered, you need to execute the folloing command to promote first registered as admin

**Run:**

    $ (cd /var/www/pixelfed && php7.2 artisan user:admin 1)

and respond yes to the question ` Add admin privileges to this user?`

### Allow/Close registration

Registrations are open by default.
To change that setting, edit `/var/www/pixelfed/.env` and set `OPEN_REGISTRATION=false` instead of `true`.
Then run `php7.2 artisan config:cache` to reload the settings.

### Pixelfed php commands and php version

Pixelfed might require some command line instructions if you want to make manual changes to your configuration.
By default php 7.0 is currently used when you type `php`. You need to use `php7.2 [command]` instead.
Those commands can be found in the official documentation.

## Documentation

 * [Official documentation](https://docs.pixelfed.org/master/)

## YunoHost specific features

#### Supported architectures

* x86-64b - [![Build Status](https://ci-apps.yunohost.org/ci/logs/pixelfed%20%28Apps%29.svg)](https://ci-apps.yunohost.org/ci/apps/pixelfed/)
* ARMv8-A - [![Build Status](https://ci-apps-arm.yunohost.org/ci/logs/pixelfed%20%28Apps%29.svg)](https://ci-apps-arm.yunohost.org/ci/apps/pixelfed/)
* Jessie x86-64b - [![Build Status](https://ci-stretch.nohost.me/ci/logs/pixelfed%20%28Apps%29.svg)](https://ci-stretch.nohost.me/ci/apps/pixelfed/)

## Links

 * Report a bug about this package: https://github.com/YunoHost-Apps/pixelfed_ynh
 * Pixelfed website: https://pixelfed.org
 * Upstream app repository: https://github.com/pixelfed/pixelfed
 * YunoHost website: https://yunohost.org

---

Developers info
----------------

**Only if you want to use a testing branch for coding, instead of merging directly into master.**
Please do your pull request to the [testing branch](https://github.com/YunoHost-Apps/pixelfed_ynh/tree/testing).

To try the testing branch, please proceed like that.
```
sudo yunohost app install https://github.com/YunoHost-Apps/pixelfed_ynh/tree/testing --debug
or
sudo yunohost app upgrade pixelfed -u https://github.com/YunoHost-Apps/pixelfed_ynh/tree/testing --debug
```
