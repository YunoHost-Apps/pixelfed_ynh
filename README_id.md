<!--
N.B.: README ini dibuat secara otomatis oleh <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
Ini TIDAK boleh diedit dengan tangan.
-->

# Pixelfed untuk YunoHost

[![Tingkat integrasi](https://apps.yunohost.org/badge/integration/pixelfed)](https://ci-apps.yunohost.org/ci/apps/pixelfed/)
![Status kerja](https://apps.yunohost.org/badge/state/pixelfed)
![Status pemeliharaan](https://apps.yunohost.org/badge/maintained/pixelfed)

[![Pasang Pixelfed dengan YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=pixelfed)

*[Baca README ini dengan bahasa yang lain.](./ALL_README.md)*

> *Paket ini memperbolehkan Anda untuk memasang Pixelfed secara cepat dan mudah pada server YunoHost.*  
> *Bila Anda tidak mempunyai YunoHost, silakan berkonsultasi dengan [panduan](https://yunohost.org/install) untuk mempelajari bagaimana untuk memasangnya.*

## Ringkasan

PixelFed is a decentralized and federated image sharing software under development.
In addition to taking over the functionality of Instagram, the functioning of PixelFed is:

* Decentralized: Each instance can follow one or more other PixelFed instances in order to allow their respective members to interact. A first pixelfed.social public body limited to 10,000 members has already been created.

* Federated: Via the ActivityPub protocol, PixelFed can interact with other software that is part of the Fediverse, such as Mastodon or PeerTube for example.

It is possible to import your data from Instagram.


**Versi terkirim:** 0.12.5~ynh1

## Tangkapan Layar

![Tangkapan Layar pada Pixelfed](./doc/screenshots/screenshot.png)

## Dokumentasi dan sumber daya

- Website aplikasi resmi: <https://pixelfed.org/>
- Dokumentasi pengguna resmi: <https://docs.pixelfed.org/>
- Dokumentasi admin resmi: <https://docs.pixelfed.org/running-pixelfed/administration.html>
- Depot kode aplikasi hulu: <https://github.com/pixelfed/pixelfed>
- Gudang YunoHost: <https://apps.yunohost.org/app/pixelfed>
- Laporkan bug: <https://github.com/YunoHost-Apps/pixelfed_ynh/issues>

## Info developer

Silakan kirim pull request ke [`testing` branch](https://github.com/YunoHost-Apps/pixelfed_ynh/tree/testing).

Untuk mencoba branch `testing`, silakan dilanjutkan seperti:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/pixelfed_ynh/tree/testing --debug
atau
sudo yunohost app upgrade pixelfed -u https://github.com/YunoHost-Apps/pixelfed_ynh/tree/testing --debug
```

**Info lebih lanjut mengenai pemaketan aplikasi:** <https://yunohost.org/packaging_apps>
