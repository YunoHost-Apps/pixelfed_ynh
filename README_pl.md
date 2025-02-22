<!--
To README zostało automatycznie wygenerowane przez <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
Nie powinno być ono edytowane ręcznie.
-->

# Pixelfed Glitch dla YunoHost

[![Poziom integracji](https://apps.yunohost.org/badge/integration/pixelfed_glitch)](https://ci-apps.yunohost.org/ci/apps/pixelfed_glitch/)
![Status działania](https://apps.yunohost.org/badge/state/pixelfed_glitch)
![Status utrzymania](https://apps.yunohost.org/badge/maintained/pixelfed_glitch)

[![Zainstaluj Pixelfed Glitch z YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=pixelfed_glitch)

*[Przeczytaj plik README w innym języku.](./ALL_README.md)*

> *Ta aplikacja pozwala na szybką i prostą instalację Pixelfed Glitch na serwerze YunoHost.*  
> *Jeżeli nie masz YunoHost zapoznaj się z [poradnikiem](https://yunohost.org/install) instalacji.*

## Przegląd

PixelFed Glitch s a decentralized and federated image sharing software under development. It is a fork of the officiel Pixelfed software.
In addition to taking over the functionality of Instagram, the functioning of PixelFed is:

* Decentralized: Each instance can follow one or more other PixelFed instances in order to allow their respective members to interact. A first pixelfed.social public body limited to 10,000 members has already been created.

* Federated: Via the ActivityPub protocol, PixelFed can interact with other software that is part of the Fediverse, such as Mastodon or PeerTube for example.

It is possible to import your data from Instagram.


**Dostarczona wersja:** 1.9.1~ynh1

## Zrzuty ekranu

![Zrzut ekranu z Pixelfed Glitch](./doc/screenshots/screenshot.png)

## Dokumentacja i zasoby

- Oficjalna strona aplikacji: <https://pixelfed-glitch.github.io/docs/>
- Oficjalna dokumentacja: <https://pixelfed-glitch.github.io/docs/>
- Oficjalna dokumentacja dla administratora: <https://pixelfed-glitch.github.io/docs/>
- Repozytorium z kodem źródłowym: <https://github.com/pixelfed-glitch/pixelfed>
- Sklep YunoHost: <https://apps.yunohost.org/app/pixelfed_glitch>
- Zgłaszanie błędów: <https://github.com/YunoHost-Apps/pixelfed_glitch_ynh/issues>

## Informacje od twórców

Wyślij swój pull request do [gałęzi `testing`](https://github.com/YunoHost-Apps/pixelfed_glitch_ynh/tree/testing).

Aby wypróbować gałąź `testing` postępuj zgodnie z instrukcjami:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/pixelfed_glitch_ynh/tree/testing --debug
lub
sudo yunohost app upgrade pixelfed_glitch -u https://github.com/YunoHost-Apps/pixelfed_glitch_ynh/tree/testing --debug
```

**Więcej informacji o tworzeniu paczek aplikacji:** <https://yunohost.org/packaging_apps>
