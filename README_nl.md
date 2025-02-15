<!--
NB: Deze README is automatisch gegenereerd door <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
Hij mag NIET handmatig aangepast worden.
-->

# Pixelfed Glitch voor Yunohost

[![Integratieniveau](https://apps.yunohost.org/badge/integration/pixelfed_glitch)](https://ci-apps.yunohost.org/ci/apps/pixelfed_glitch/)
![Mate van functioneren](https://apps.yunohost.org/badge/state/pixelfed_glitch)
![Onderhoudsstatus](https://apps.yunohost.org/badge/maintained/pixelfed_glitch)

[![Pixelfed Glitch met Yunohost installeren](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=pixelfed_glitch)

*[Deze README in een andere taal lezen.](./ALL_README.md)*

> *Met dit pakket kun je Pixelfed Glitch snel en eenvoudig op een YunoHost-server installeren.*  
> *Als je nog geen YunoHost hebt, lees dan [de installatiehandleiding](https://yunohost.org/install), om te zien hoe je 'm installeert.*

## Overzicht

PixelFed Glitch s a decentralized and federated image sharing software under development. It is a fork of the officiel Pixelfed software.
In addition to taking over the functionality of Instagram, the functioning of PixelFed is:

* Decentralized: Each instance can follow one or more other PixelFed instances in order to allow their respective members to interact. A first pixelfed.social public body limited to 10,000 members has already been created.

* Federated: Via the ActivityPub protocol, PixelFed can interact with other software that is part of the Fediverse, such as Mastodon or PeerTube for example.

It is possible to import your data from Instagram.


**Geleverde versie:** 0.12.4-glitch.1.9.1~ynh1

## Schermafdrukken

![Schermafdrukken van Pixelfed Glitch](./doc/screenshots/screenshot.png)

## Documentatie en bronnen

- Officiele website van de app: <https://pixelfed-glitch.github.io/docs/>
- Officiele gebruikersdocumentatie: <https://pixelfed-glitch.github.io/docs/>
- Officiele beheerdersdocumentatie: <https://pixelfed-glitch.github.io/docs/>
- Upstream app codedepot: <https://github.com/pixelfed-glitch/pixelfed>
- YunoHost-store: <https://apps.yunohost.org/app/pixelfed_glitch>
- Meld een bug: <https://github.com/YunoHost-Apps/pixelfed_glitch_ynh/issues>

## Ontwikkelaarsinformatie

Stuur je pull request alsjeblieft naar de [`testing`-branch](https://github.com/YunoHost-Apps/pixelfed_glitch_ynh/tree/testing).

Om de `testing`-branch uit te proberen, ga als volgt te werk:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/pixelfed_glitch_ynh/tree/testing --debug
of
sudo yunohost app upgrade pixelfed_glitch -u https://github.com/YunoHost-Apps/pixelfed_glitch_ynh/tree/testing --debug
```

**Verdere informatie over app-packaging:** <https://yunohost.org/packaging_apps>
