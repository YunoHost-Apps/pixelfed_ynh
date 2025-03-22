<!--
注意：此 README 由 <https://github.com/YunoHost/apps/tree/master/tools/readme_generator> 自动生成
请勿手动编辑。
-->

# YunoHost 上的 Pixelfed Glitch

[![集成程度](https://apps.yunohost.org/badge/integration/pixelfed_glitch)](https://ci-apps.yunohost.org/ci/apps/pixelfed_glitch/)
![工作状态](https://apps.yunohost.org/badge/state/pixelfed_glitch)
![维护状态](https://apps.yunohost.org/badge/maintained/pixelfed_glitch)

[![使用 YunoHost 安装 Pixelfed Glitch](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=pixelfed_glitch)

*[阅读此 README 的其它语言版本。](./ALL_README.md)*

> *通过此软件包，您可以在 YunoHost 服务器上快速、简单地安装 Pixelfed Glitch。*  
> *如果您还没有 YunoHost，请参阅[指南](https://yunohost.org/install)了解如何安装它。*

## 概况

PixelFed Glitch s a decentralized and federated image sharing software under development. It is a fork of the officiel Pixelfed software.
In addition to taking over the functionality of Instagram, the functioning of PixelFed is:

* Decentralized: Each instance can follow one or more other PixelFed instances in order to allow their respective members to interact. A first pixelfed.social public body limited to 10,000 members has already been created.

* Federated: Via the ActivityPub protocol, PixelFed can interact with other software that is part of the Fediverse, such as Mastodon or PeerTube for example.

It is possible to import your data from Instagram.


**分发版本：** 0.12.4-glitch.1.10.0~ynh1

## 截图

![Pixelfed Glitch 的截图](./doc/screenshots/screenshot.png)

## 文档与资源

- 官方应用网站： <https://pixelfed-glitch.github.io/docs/>
- 官方用户文档： <https://pixelfed-glitch.github.io/docs/>
- 官方管理文档： <https://pixelfed-glitch.github.io/docs/>
- 上游应用代码库： <https://github.com/pixelfed-glitch/pixelfed>
- YunoHost 商店： <https://apps.yunohost.org/app/pixelfed_glitch>
- 报告 bug： <https://github.com/YunoHost-Apps/pixelfed_glitch_ynh/issues>

## 开发者信息

请向 [`testing` 分支](https://github.com/YunoHost-Apps/pixelfed_glitch_ynh/tree/testing) 发送拉取请求。

如要尝试 `testing` 分支，请这样操作：

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/pixelfed_glitch_ynh/tree/testing --debug
或
sudo yunohost app upgrade pixelfed_glitch -u https://github.com/YunoHost-Apps/pixelfed_glitch_ynh/tree/testing --debug
```

**有关应用打包的更多信息：** <https://yunohost.org/packaging_apps>
