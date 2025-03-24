<!--
NB: Deze README is automatisch gegenereerd door <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
Hij mag NIET handmatig aangepast worden.
-->

# Pixelfed voor Yunohost

[![Integratieniveau](https://apps.yunohost.org/badge/integration/pixelfed)](https://ci-apps.yunohost.org/ci/apps/pixelfed/)
![Mate van functioneren](https://apps.yunohost.org/badge/state/pixelfed)
![Onderhoudsstatus](https://apps.yunohost.org/badge/maintained/pixelfed)

[![Pixelfed met Yunohost installeren](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=pixelfed)

*[Deze README in een andere taal lezen.](./ALL_README.md)*

> *Met dit pakket kun je Pixelfed snel en eenvoudig op een YunoHost-server installeren.*  
> *Als je nog geen YunoHost hebt, lees dan [de installatiehandleiding](https://yunohost.org/install), om te zien hoe je 'm installeert.*

## Overzicht

PixelFed is a decentralized and federated image sharing software under development.
In addition to taking over the functionality of Instagram, the functioning of PixelFed is:

* Decentralized: Each instance can follow one or more other PixelFed instances in order to allow their respective members to interact. A first pixelfed.social public body limited to 10,000 members has already been created.

* Federated: Via the ActivityPub protocol, PixelFed can interact with other software that is part of the Fediverse, such as Mastodon or PeerTube for example.

It is possible to import your data from Instagram.


**Geleverde versie:** 0.12.5~ynh1

## Schermafdrukken

![Schermafdrukken van Pixelfed](./doc/screenshots/screenshot.png)

## Documentatie en bronnen

- Officiele website van de app: <https://pixelfed.org/>
- Officiele gebruikersdocumentatie: <https://docs.pixelfed.org/>
- Officiele beheerdersdocumentatie: <https://docs.pixelfed.org/running-pixelfed/administration.html>
- Upstream app codedepot: <https://github.com/pixelfed/pixelfed>
- YunoHost-store: <https://apps.yunohost.org/app/pixelfed>
- Meld een bug: <https://github.com/YunoHost-Apps/pixelfed_ynh/issues>

## Ontwikkelaarsinformatie

Stuur je pull request alsjeblieft naar de [`testing`-branch](https://github.com/YunoHost-Apps/pixelfed_ynh/tree/testing).

Om de `testing`-branch uit te proberen, ga als volgt te werk:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/pixelfed_ynh/tree/testing --debug
of
sudo yunohost app upgrade pixelfed -u https://github.com/YunoHost-Apps/pixelfed_ynh/tree/testing --debug
```

**Verdere informatie over app-packaging:** <https://yunohost.org/packaging_apps>
