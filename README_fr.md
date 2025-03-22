<!--
Nota bene : ce README est automatiquement généré par <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
Il NE doit PAS être modifié à la main.
-->

# Pixelfed Glitch pour YunoHost

[![Niveau d’intégration](https://apps.yunohost.org/badge/integration/pixelfed_glitch)](https://ci-apps.yunohost.org/ci/apps/pixelfed_glitch/)
![Statut du fonctionnement](https://apps.yunohost.org/badge/state/pixelfed_glitch)
![Statut de maintenance](https://apps.yunohost.org/badge/maintained/pixelfed_glitch)

[![Installer Pixelfed Glitch avec YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=pixelfed_glitch)

*[Lire le README dans d'autres langues.](./ALL_README.md)*

> *Ce package vous permet d’installer Pixelfed Glitch rapidement et simplement sur un serveur YunoHost.*  
> *Si vous n’avez pas YunoHost, consultez [ce guide](https://yunohost.org/install) pour savoir comment l’installer et en profiter.*

## Vue d’ensemble

PixelFed Glitch est un logiciel décentralisé et fédéré de partage d'images en cours de développement. C'est un dérivé du logiciel Pixelfed officiel.
En plus de reprendre les fonctionnalités d'Instagram, le fonctionnement de PixelFed est :

* Décentralisé : Chaque instance peut suivre une ou plusieurs autres instances PixelFed afin de permettre à leurs membres respectifs d'interagir. Une première instance publique pixelfed.social limitée à 10000 membres a déjà été créée.

* Fédéré : Via le protocole ActivityPub, PixelFed peut interagir avec d'autres logiciels qui font partie du Fediverse, comme Mastodon ou PeerTube par exemple.

Il est possible d'importer ses données depuis Instagram.


**Version incluse :** 0.12.4-glitch.1.10.0~ynh1

## Captures d’écran

![Capture d’écran de Pixelfed Glitch](./doc/screenshots/screenshot.png)

## Documentations et ressources

- Site officiel de l’app : <https://pixelfed-glitch.github.io/docs/>
- Documentation officielle utilisateur : <https://pixelfed-glitch.github.io/docs/>
- Documentation officielle de l’admin : <https://pixelfed-glitch.github.io/docs/>
- Dépôt de code officiel de l’app : <https://github.com/pixelfed-glitch/pixelfed>
- YunoHost Store : <https://apps.yunohost.org/app/pixelfed_glitch>
- Signaler un bug : <https://github.com/YunoHost-Apps/pixelfed_glitch_ynh/issues>

## Informations pour les développeurs

Merci de faire vos pull request sur la [branche `testing`](https://github.com/YunoHost-Apps/pixelfed_glitch_ynh/tree/testing).

Pour essayer la branche `testing`, procédez comme suit :

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/pixelfed_glitch_ynh/tree/testing --debug
ou
sudo yunohost app upgrade pixelfed_glitch -u https://github.com/YunoHost-Apps/pixelfed_glitch_ynh/tree/testing --debug
```

**Plus d’infos sur le packaging d’applications :** <https://yunohost.org/packaging_apps>
