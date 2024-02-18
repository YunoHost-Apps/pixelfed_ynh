## Some useful commands to know to manage your instance
You need to run them from you pixelfed folder (usually `/var/www/pixelfed`). The `php.VERSION` might be changed according to you current package version.

### Applying changes from the `.env` config file

Once you made some changes, you need to run `php8.2 artisan config:cache && php8.2 artisan cache:clear` to apply them.
Note: this will disconnect any logged-in account (including from the admin web UI).

### Removing avatar cache to save space
`php8.2 artisan avatar:storage-deep-clean`

Use it to prune old avatars that are outdated or no longer used. This might save some disk space.

### Fix missing avatars or refetch them.
`php8.2 artisan  avatar:storage`

It can be used to fetch remote avatars that are not loaded (or in case you deleted `/var/www/pixelfed/storage/app/public/cache/avatars` where they are stored).
It might also be usefull to migrate that cache (only, not the other existing media) to an S3 storage, by refectching all of them.

Be aware that this will generate a lot of "jobs" that will take time to be completed, and have a significant load on your server (especially bandwith and CPU).

### When using S3

- Delete non-used media that where not cleaned (it happens) : `php8.2 artisanmedia:gc` (Delete media uploads not attached to any active statuses)

- Same but for media stored on S3 storage and still locally stored (doubles) : `php8.2 artisan media:s3gc` (Delete (local) media uploads that exist on S3)

- Migrate your media to an S3 storage (you need to configure it first), so media uploaded before configuring S3 are migrated there: `php8.2 artisanmedia:migrate2cloud` (Move older media to cloud storage)

- Migrate from one S3 backend the other one (change the configuration first): `php8.2 artisanmedia:cloud-url-rewrite` (Rewrite S3 media urls from local users)
