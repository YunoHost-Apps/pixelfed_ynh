<!--
Este archivo README esta generado automaticamente<https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
No se debe editar a mano.
-->

# Pixelfed para Yunohost

[![Nivel de integración](https://apps.yunohost.org/badge/integration/pixelfed)](https://ci-apps.yunohost.org/ci/apps/pixelfed/)
![Estado funcional](https://apps.yunohost.org/badge/state/pixelfed)
![Estado En Mantención](https://apps.yunohost.org/badge/maintained/pixelfed)

[![Instalar Pixelfed con Yunhost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=pixelfed)

*[Leer este README en otros idiomas.](./ALL_README.md)*

> *Este paquete le permite instalarPixelfed rapidamente y simplement en un servidor YunoHost.*  
> *Si no tiene YunoHost, visita [the guide](https://yunohost.org/install) para aprender como instalarla.*

## Descripción general

PixelFed is a decentralized and federated image sharing software under development.
In addition to taking over the functionality of Instagram, the functioning of PixelFed is:

* Decentralized: Each instance can follow one or more other PixelFed instances in order to allow their respective members to interact. A first pixelfed.social public body limited to 10,000 members has already been created.

* Federated: Via the ActivityPub protocol, PixelFed can interact with other software that is part of the Fediverse, such as Mastodon or PeerTube for example.

It is also possible to import your data from Instagram.


**Versión actual:** 0.12.4~ynh1

## Capturas

![Captura de Pixelfed](./doc/screenshots/screenshots.jpg)

## Documentaciones y recursos

- Sitio web oficial: <https://pixelfed.org/>
- Documentación usuario oficial: <https://docs.pixelfed.org/>
- Documentación administrador oficial: <https://docs.pixelfed.org/running-pixelfed/administration.html>
- Repositorio del código fuente oficial de la aplicación : <https://github.com/pixelfed/pixelfed>
- Catálogo YunoHost: <https://apps.yunohost.org/app/pixelfed>
- Reportar un error: <https://github.com/YunoHost-Apps/pixelfed_ynh/issues>

## Información para desarrolladores

Por favor enviar sus correcciones a la [rama `testing`](https://github.com/YunoHost-Apps/pixelfed_ynh/tree/testing).

Para probar la rama `testing`, sigue asÍ:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/pixelfed_ynh/tree/testing --debug
o
sudo yunohost app upgrade pixelfed -u https://github.com/YunoHost-Apps/pixelfed_ynh/tree/testing --debug
```

**Mas informaciones sobre el empaquetado de aplicaciones:** <https://yunohost.org/packaging_apps>
