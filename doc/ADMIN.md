### Administrator

After being first registered, you need to execute the folloing command to promote first registered as admin

**Run:**

    sudo php8.2 __INSTALL_DIR__/artisan user:admin 1

and respond yes to the question ` Add admin privileges to this user?`.

### Allow/Close registrations

Registrations are open by default.
To change that setting, edit `__INSTALL_DIR__/.env` and set `OPEN_REGISTRATION=false` instead of `true`.
Then run `php8.2 artisan config:cache` to reload the settings.

### Disable search engine indexing

If you don't want your Pixelfed instance to be indexed in search engine (and so on), edit `__INSTALL_DIR__/public/robots.txt` like this:
```
User-agent: *
Disallow: /
```
Note: search engines will see that file and may or may not respect its content.

Since 0.10.10, by default `/discover/places/`, `/stories/` and `/i/` are present in that file.
