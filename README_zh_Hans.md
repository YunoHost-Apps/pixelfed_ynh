<!--
注意：此 README 由 <https://github.com/YunoHost/apps/tree/master/tools/readme_generator> 自动生成
请勿手动编辑。
-->

# YunoHost 的 Pixelfed

[![集成程度](https://dash.yunohost.org/integration/pixelfed.svg)](https://dash.yunohost.org/appci/app/pixelfed) ![工作状态](https://ci-apps.yunohost.org/ci/badges/pixelfed.status.svg) ![维护状态](https://ci-apps.yunohost.org/ci/badges/pixelfed.maintain.svg)

[![使用 YunoHost 安装 Pixelfed](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=pixelfed)

*[阅读此 README 的其它语言版本。](./ALL_README.md)*

> *通过此软件包，您可以在 YunoHost 服务器上快速、简单地安装 Pixelfed。*  
> *如果您还没有 YunoHost，请参阅[指南](https://yunohost.org/install)了解如何安装它。*

## 概况

PixelFed is a decentralized and federated image sharing software under development.
In addition to taking over the functionality of Instagram, the functioning of PixelFed is:

* Decentralized: Each instance can follow one or more other PixelFed instances in order to allow their respective members to interact. A first pixelfed.social public body limited to 10,000 members has already been created.

* Federated: Via the ActivityPub protocol, PixelFed can interact with other software that is part of the Fediverse, such as Mastodon or PeerTube for example.

It is also possible to import your data from Instagram. 

**分发版本：** 0.12.0~ynh1

## 截图

![Pixelfed 的截图](./doc/screenshots/screenshots.jpg)

## 免责声明 / 重要信息

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

## 文档与资源

- 官方应用网站： <https://pixelfed.org/>
- 官方用户文档： <https://docs.pixelfed.org/>
- 官方管理文档： <https://docs.pixelfed.org/running-pixelfed/administration.html>
- 上游应用代码库： <https://github.com/pixelfed/pixelfed>
- YunoHost 商店： <https://apps.yunohost.org/app/pixelfed>
- 报告 bug： <https://github.com/YunoHost-Apps/pixelfed_ynh/issues>

## 开发者信息

请向 [`testing` 分支](https://github.com/YunoHost-Apps/pixelfed_ynh/tree/testing) 发送拉取请求。

如要尝试 `testing` 分支，请这样操作：

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/pixelfed_ynh/tree/testing --debug
或
sudo yunohost app upgrade pixelfed -u https://github.com/YunoHost-Apps/pixelfed_ynh/tree/testing --debug
```

**有关应用打包的更多信息：** <https://yunohost.org/packaging_apps>
