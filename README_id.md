<!--
N.B.: README ini dibuat secara otomatis oleh <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
Ini TIDAK boleh diedit dengan tangan.
-->

# Pixelfed Glitch untuk YunoHost

[![Tingkat integrasi](https://apps.yunohost.org/badge/integration/pixelfed_glitch)](https://ci-apps.yunohost.org/ci/apps/pixelfed_glitch/)
![Status kerja](https://apps.yunohost.org/badge/state/pixelfed_glitch)
![Status pemeliharaan](https://apps.yunohost.org/badge/maintained/pixelfed_glitch)

[![Pasang Pixelfed Glitch dengan YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=pixelfed_glitch)

*[Baca README ini dengan bahasa yang lain.](./ALL_README.md)*

> *Paket ini memperbolehkan Anda untuk memasang Pixelfed Glitch secara cepat dan mudah pada server YunoHost.*  
> *Bila Anda tidak mempunyai YunoHost, silakan berkonsultasi dengan [panduan](https://yunohost.org/install) untuk mempelajari bagaimana untuk memasangnya.*

## Ringkasan

PixelFed Glitch s a decentralized and federated image sharing software under development. It is a fork of the officiel Pixelfed software.
In addition to taking over the functionality of Instagram, the functioning of PixelFed is:

* Decentralized: Each instance can follow one or more other PixelFed instances in order to allow their respective members to interact. A first pixelfed.social public body limited to 10,000 members has already been created.

* Federated: Via the ActivityPub protocol, PixelFed can interact with other software that is part of the Fediverse, such as Mastodon or PeerTube for example.

It is possible to import your data from Instagram.


**Versi terkirim:** 0.12.4+glitch.1.9.1~ynh1

## Tangkapan Layar

![Tangkapan Layar pada Pixelfed Glitch](./doc/screenshots/screenshot.png)

## Dokumentasi dan sumber daya

- Website aplikasi resmi: <https://pixelfed-glitch.github.io/docs/>
- Dokumentasi pengguna resmi: <https://pixelfed-glitch.github.io/docs/>
- Dokumentasi admin resmi: <https://pixelfed-glitch.github.io/docs/>
- Depot kode aplikasi hulu: <https://github.com/pixelfed-glitch/pixelfed>
- Gudang YunoHost: <https://apps.yunohost.org/app/pixelfed_glitch>
- Laporkan bug: <https://github.com/YunoHost-Apps/pixelfed_glitch_ynh/issues>

## Info developer

Silakan kirim pull request ke [`testing` branch](https://github.com/YunoHost-Apps/pixelfed_glitch_ynh/tree/testing).

Untuk mencoba branch `testing`, silakan dilanjutkan seperti:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/pixelfed_glitch_ynh/tree/testing --debug
atau
sudo yunohost app upgrade pixelfed_glitch -u https://github.com/YunoHost-Apps/pixelfed_glitch_ynh/tree/testing --debug
```

**Info lebih lanjut mengenai pemaketan aplikasi:** <https://yunohost.org/packaging_apps>
