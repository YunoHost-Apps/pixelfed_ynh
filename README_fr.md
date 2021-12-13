# Pixelfed pour YunoHost

[![Niveau d'intégration](https://dash.yunohost.org/integration/pixelfed.svg)](https://dash.yunohost.org/appci/app/pixelfed) ![](https://ci-apps.yunohost.org/ci/badges/pixelfed.status.svg) ![](https://ci-apps.yunohost.org/ci/badges/pixelfed.maintain.svg)  
[![Installer Pixelfed avec YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=pixelfed)

*[Read this readme in english.](./README.md)*
*[Lire ce readme en français.](./README_fr.md)*

> *Ce package vous permet d'installer Pixelfed rapidement et simplement sur un serveur YunoHost.
Si vous n'avez pas YunoHost, regardez [ici](https://yunohost.org/#/install) pour savoir comment l'installer et en profiter.*

## Vue d'ensemble

PixelFed est un logiciel décentralisé et fédéré de partage d'images en cours de développement.
En plus de reprendre les fonctionnalités d'Instagram, le fonctionnement de PixelFed est:

* Décentralisé : Chaque instance peut suivre une ou plusieurs autres instances PixelFed afin de permettre à leurs membres respectifs d'interagir. Une première instance publique pixelfed.social limitée à 10 000 membres a déjà été créée.

* Fédéré : Via le protocole ActivityPub, PixelFed peut interagir avec d'autres logiciels qui font partie du Fediverse, comme Mastodon ou PeerTube par exemple.

Il est également possible d'importer ses données depuis Instagram.


**Version incluse :** 0.11.1~ynh2



## Captures d'écran

![](./doc/screenshots/screenshots.jpg)

## Avertissements / informations importantes

## Points importants à lire avant l'installation

1. **Pixelfed** nécessite un **domaine racine** dédié, par ex. pixelfed.domain.tld

### Administrateur

Après avoir été enregistré pour la première fois, vous devez exécuter la commande suivante pour promouvoir le premier enregistré en tant qu'administrateur

**Courir:**

    $ (cd /var/www/pixelfed && php7.3 artisan user:admin 1)

et répondez oui à la question « Ajouter des privilèges d'administrateur à cet utilisateur ? »

### Autoriser/Fermer les inscriptions

Les inscriptions sont ouvertes par défaut.
Pour modifier ce paramètre, modifiez `/var/www/pixelfed/.env` et définissez `OPEN_REGISTRATION=false` au lieu de `true`.
Ensuite, exécutez `php7.3 artisan config:cache` pour recharger les paramètres.

### Désactiver l'indexation des moteurs de recherche

Si vous ne voulez pas que votre instance Pixelfed soit indexée dans le moteur de recherche (et ainsi de suite), modifiez `/var/www/pixelfed/public/robots.txt` comme ceci :
```
Agent utilisateur: *
Interdire : /
```
Remarque : les moteurs de recherche verront ce fichier et pourront ou non respecter son contenu.

Depuis la 0.10.10, par défaut `/discover/places/`, `/stories/` et `/i/` sont présents dans ce fichier.

## Documentations et ressources

* Site officiel de l'app : https://pixelfed.org/
* Documentation officielle utilisateur : https://docs.pixelfed.org/
* Documentation officielle de l'admin : https://docs.pixelfed.org/running-pixelfed/administration.html
* Dépôt de code officiel de l'app : https://github.com/pixelfed/pixelfed
* Documentation YunoHost pour cette app : https://yunohost.org/app_pixelfed
* Signaler un bug : https://github.com/YunoHost-Apps/pixelfed_ynh/issues

## Informations pour les développeurs

Merci de faire vos pull request sur la [branche testing](https://github.com/YunoHost-Apps/pixelfed_ynh/tree/testing).

Pour essayer la branche testing, procédez comme suit.
```
sudo yunohost app install https://github.com/YunoHost-Apps/pixelfed_ynh/tree/testing --debug
ou
sudo yunohost app upgrade pixelfed -u https://github.com/YunoHost-Apps/pixelfed_ynh/tree/testing --debug
```

**Plus d'infos sur le packaging d'applications :** https://yunohost.org/packaging_apps