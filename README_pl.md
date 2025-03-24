<!--
To README zostało automatycznie wygenerowane przez <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
Nie powinno być ono edytowane ręcznie.
-->

# Pixelfed dla YunoHost

[![Poziom integracji](https://apps.yunohost.org/badge/integration/pixelfed)](https://ci-apps.yunohost.org/ci/apps/pixelfed/)
![Status działania](https://apps.yunohost.org/badge/state/pixelfed)
![Status utrzymania](https://apps.yunohost.org/badge/maintained/pixelfed)

[![Zainstaluj Pixelfed z YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=pixelfed)

*[Przeczytaj plik README w innym języku.](./ALL_README.md)*

> *Ta aplikacja pozwala na szybką i prostą instalację Pixelfed na serwerze YunoHost.*  
> *Jeżeli nie masz YunoHost zapoznaj się z [poradnikiem](https://yunohost.org/install) instalacji.*

## Przegląd

PixelFed is a decentralized and federated image sharing software under development.
In addition to taking over the functionality of Instagram, the functioning of PixelFed is:

* Decentralized: Each instance can follow one or more other PixelFed instances in order to allow their respective members to interact. A first pixelfed.social public body limited to 10,000 members has already been created.

* Federated: Via the ActivityPub protocol, PixelFed can interact with other software that is part of the Fediverse, such as Mastodon or PeerTube for example.

It is possible to import your data from Instagram.


**Dostarczona wersja:** 0.12.5~ynh1

## Zrzuty ekranu

![Zrzut ekranu z Pixelfed](./doc/screenshots/screenshot.png)

## Dokumentacja i zasoby

- Oficjalna strona aplikacji: <https://pixelfed.org/>
- Oficjalna dokumentacja: <https://docs.pixelfed.org/>
- Oficjalna dokumentacja dla administratora: <https://docs.pixelfed.org/running-pixelfed/administration.html>
- Repozytorium z kodem źródłowym: <https://github.com/pixelfed/pixelfed>
- Sklep YunoHost: <https://apps.yunohost.org/app/pixelfed>
- Zgłaszanie błędów: <https://github.com/YunoHost-Apps/pixelfed_ynh/issues>

## Informacje od twórców

Wyślij swój pull request do [gałęzi `testing`](https://github.com/YunoHost-Apps/pixelfed_ynh/tree/testing).

Aby wypróbować gałąź `testing` postępuj zgodnie z instrukcjami:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/pixelfed_ynh/tree/testing --debug
lub
sudo yunohost app upgrade pixelfed -u https://github.com/YunoHost-Apps/pixelfed_ynh/tree/testing --debug
```

**Więcej informacji o tworzeniu paczek aplikacji:** <https://yunohost.org/packaging_apps>
