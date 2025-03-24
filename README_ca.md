<!--
N.B.: Aquest README ha estat generat automàticament per <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
NO s'ha de modificar manualment.
-->

# Pixelfed per YunoHost

[![Nivell d'integració](https://apps.yunohost.org/badge/integration/pixelfed)](https://ci-apps.yunohost.org/ci/apps/pixelfed/)
![Estat de funcionament](https://apps.yunohost.org/badge/state/pixelfed)
![Estat de manteniment](https://apps.yunohost.org/badge/maintained/pixelfed)

[![Instal·la Pixelfed amb YunoHosth](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=pixelfed)

*[Llegeix aquest README en altres idiomes.](./ALL_README.md)*

> *Aquest paquet et permet instal·lar Pixelfed de forma ràpida i senzilla en un servidor YunoHost.*  
> *Si no tens YunoHost, consulta [la guia](https://yunohost.org/install) per saber com instal·lar-lo.*

## Visió general

PixelFed is a decentralized and federated image sharing software under development.
In addition to taking over the functionality of Instagram, the functioning of PixelFed is:

* Decentralized: Each instance can follow one or more other PixelFed instances in order to allow their respective members to interact. A first pixelfed.social public body limited to 10,000 members has already been created.

* Federated: Via the ActivityPub protocol, PixelFed can interact with other software that is part of the Fediverse, such as Mastodon or PeerTube for example.

It is possible to import your data from Instagram.


**Versió inclosa:** 0.12.5~ynh1

## Captures de pantalla

![Captures de pantalla de Pixelfed](./doc/screenshots/screenshot.png)

## Documentació i recursos

- Lloc web oficial de l'aplicació: <https://pixelfed.org/>
- Documentació oficial per l'usuari: <https://docs.pixelfed.org/>
- Documentació oficial per l'administrador: <https://docs.pixelfed.org/running-pixelfed/administration.html>
- Repositori oficial del codi de l'aplicació: <https://github.com/pixelfed/pixelfed>
- Botiga YunoHost: <https://apps.yunohost.org/app/pixelfed>
- Reportar un error: <https://github.com/YunoHost-Apps/pixelfed_ynh/issues>

## Informació per a desenvolupadors

Envieu les pull request a la [branca `testing`](https://github.com/YunoHost-Apps/pixelfed_ynh/tree/testing).

Per provar la branca `testing`, procedir com descrit a continuació:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/pixelfed_ynh/tree/testing --debug
o
sudo yunohost app upgrade pixelfed -u https://github.com/YunoHost-Apps/pixelfed_ynh/tree/testing --debug
```

**Més informació sobre l'empaquetatge d'aplicacions:** <https://yunohost.org/packaging_apps>
