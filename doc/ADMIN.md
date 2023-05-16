### Administrator

After being first registered, you need to execute the folloing command to promote first registered as admin

**Run:**

    $ sudo php8.0 /var/www/pixelfed/artisan user:admin 1

and respond yes to the question ` Add admin privileges to this user?`.

### Allow/Close registrations

Registrations are open by default.
To change that setting, edit `/var/www/pixelfed/.env` and set `OPEN_REGISTRATION=false` instead of `true`.
Then run `php7.4 artisan config:cache` to reload the settings.

### Change max upload limit

To change max upload limit (default : 50MB), edit the Pixelfed `php-fpm.conf` file and find the line `Common values to change to increase file upload limit`
And adjust those values:
```
php_admin_value[post_max_size] = 50M
php_admin_value[upload_max_filesize] = 50M
```
        
        
          



### Disable search engine indexing

If you don't want your Pixelfed instance to be indexed in search engine (and so on), edit `/var/www/pixelfed/public/robots.txt` like this:
```
User-agent: *
Disallow: /
```
Note: search engines will see that file and may or may not respect its content.

Since 0.10.10, by default `/discover/places/`, `/stories/` and `/i/` are present in that file.
