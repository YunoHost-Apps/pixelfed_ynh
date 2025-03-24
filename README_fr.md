<!--
Nota bene : ce README est automatiquement généré par <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
Il NE doit PAS être modifié à la main.
-->

# Pixelfed pour YunoHost

[![Niveau d’intégration](https://apps.yunohost.org/badge/integration/pixelfed)](https://ci-apps.yunohost.org/ci/apps/pixelfed/)
![Statut du fonctionnement](https://apps.yunohost.org/badge/state/pixelfed)
![Statut de maintenance](https://apps.yunohost.org/badge/maintained/pixelfed)

[![Installer Pixelfed avec YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=pixelfed)

*[Lire le README dans d'autres langues.](./ALL_README.md)*

> *Ce package vous permet d’installer Pixelfed rapidement et simplement sur un serveur YunoHost.*  
> *Si vous n’avez pas YunoHost, consultez [ce guide](https://yunohost.org/install) pour savoir comment l’installer et en profiter.*

## Vue d’ensemble

PixelFed est un logiciel décentralisé et fédéré de partage d'images en cours de développement.
En plus de reprendre les fonctionnalités d'Instagram, le fonctionnement de PixelFed est :

* Décentralisé : Chaque instance peut suivre une ou plusieurs autres instances PixelFed afin de permettre à leurs membres respectifs d'interagir. Une première instance publique pixelfed.social limitée à 10000 membres a déjà été créée.

* Fédéré : Via le protocole ActivityPub, PixelFed peut interagir avec d'autres logiciels qui font partie du Fediverse, comme Mastodon ou PeerTube par exemple.

Il est possible d'importer ses données depuis Instagram.


**Version incluse :** 0.12.5~ynh1

## Captures d’écran

![Capture d’écran de Pixelfed](./doc/screenshots/screenshot.png)

## Documentations et ressources

- Site officiel de l’app : <https://pixelfed.org/>
- Documentation officielle utilisateur : <https://docs.pixelfed.org/>
- Documentation officielle de l’admin : <https://docs.pixelfed.org/running-pixelfed/administration.html>
- Dépôt de code officiel de l’app : <https://github.com/pixelfed/pixelfed>
- YunoHost Store : <https://apps.yunohost.org/app/pixelfed>
- Signaler un bug : <https://github.com/YunoHost-Apps/pixelfed_ynh/issues>

## Informations pour les développeurs

Merci de faire vos pull request sur la [branche `testing`](https://github.com/YunoHost-Apps/pixelfed_ynh/tree/testing).

Pour essayer la branche `testing`, procédez comme suit :

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/pixelfed_ynh/tree/testing --debug
ou
sudo yunohost app upgrade pixelfed -u https://github.com/YunoHost-Apps/pixelfed_ynh/tree/testing --debug
```

**Plus d’infos sur le packaging d’applications :** <https://yunohost.org/packaging_apps>
