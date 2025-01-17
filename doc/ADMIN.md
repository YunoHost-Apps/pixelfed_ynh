### Administrator

After being first registered, you need to execute the following command to promote your account as admin:

`sudo php__PHP_VERSION__ __INSTALL_DIR__/artisan user:admin`

Enter your pseudo and respond yes to the question `Add admin privileges to this user?`.

Alternatively, you can create the account and make it admin directly with the command:

`sudo php__PHP_VERSION__ __INSTALL_DIR__/artisan user:create`

### Allow/Close registrations

Registrations are open by default.
To change that setting, edit `__INSTALL_DIR__/.env` and set `OPEN_REGISTRATION=false` instead of `true`.
Then run `php__PHP_VERSION__ __INSTALL_DIR__/artisan config:cache` to reload the settings.

### Manually verifying emails

By default, email verification is activated (adjust the `.env` file if needed). If your server can't send emails, you can manually confirm one user's email in the admin UI, tab `Moderation`, and by using the command `php__PHP_VERSION__ artisan user:verify UserName`.

### Disable search engine indexing

If you don't want your Pixelfed instance to be indexed in search engine (and so on), edit `__INSTALL_DIR__/public/robots.txt` like this:

```text
User-agent: *
Disallow: /
```

Note: search engines will see that file and may or may not respect its content.

Since version 0.10.10, by default `/discover/places/`, `/stories/` and `/i/` are present in that file.

### Applying changes from the `.env` config file

Once you made some changes, you need to run `php__PHP_VERSION__ __INSTALL_DIR__/artisan config:cache && php__PHP_VERSION__ __INSTALL_DIR__/artisan cache:clear` to apply them.
Note: this will disconnect any logged-in account (including from the admin web UI).

### Removing avatar cache to save space

`php__PHP_VERSION__ __INSTALL_DIR__/artisan avatar:storage-deep-clean`

Use it to prune old avatars that are outdated or no longer used. This might save some disk space.

### Fix missing avatars or refetch them

`php__PHP_VERSION__ __INSTALL_DIR__/artisan  avatar:storage`

It can be used to fetch remote avatars that are not loaded (or in case you deleted `__INSTALL_DIR__/storage/app/public/cache/avatars` where they are stored).
It might also be usefull to migrate that cache (only, not the other existing media) to an S3 storage, by refectching all of them.

Be aware that this will generate a lot of "jobs" that will take time to be completed, and have a significant load on your server (especially bandwith and CPU).

### When using S3

- Delete non-used media that where not cleaned (it happens): `php__PHP_VERSION__ __INSTALL_DIR__/artisanmedia:gc` (Delete media uploads not attached to any active statuses)

- Same but for media stored on S3 storage and still locally stored (doubles): `php__PHP_VERSION__ __INSTALL_DIR__/artisan media:s3gc` (Delete (local) media uploads that exist on S3)

- Migrate your media to an S3 storage (you need to configure it first), so media uploaded before configuring S3 are migrated there: `php__PHP_VERSION__ artisanmedia:migrate2cloud` (Move older media to cloud storage)

- Migrate from one S3 backend the other one (change the configuration first): `php__PHP_VERSION__ __INSTALL_DIR__/artisanmedia:cloud-url-rewrite` (Rewrite S3 media urls from local users)
