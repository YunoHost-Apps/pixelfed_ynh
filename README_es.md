<!--
Este archivo README esta generado automaticamente<https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
No se debe editar a mano.
-->

# Pixelfed Glitch para Yunohost

[![Nivel de integración](https://apps.yunohost.org/badge/integration/pixelfed_glitch)](https://ci-apps.yunohost.org/ci/apps/pixelfed_glitch/)
![Estado funcional](https://apps.yunohost.org/badge/state/pixelfed_glitch)
![Estado En Mantención](https://apps.yunohost.org/badge/maintained/pixelfed_glitch)

[![Instalar Pixelfed Glitch con Yunhost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=pixelfed_glitch)

*[Leer este README en otros idiomas.](./ALL_README.md)*

> *Este paquete le permite instalarPixelfed Glitch rapidamente y simplement en un servidor YunoHost.*  
> *Si no tiene YunoHost, visita [the guide](https://yunohost.org/install) para aprender como instalarla.*

## Descripción general

PixelFed Glitch s a decentralized and federated image sharing software under development. It is a fork of the officiel Pixelfed software.
In addition to taking over the functionality of Instagram, the functioning of PixelFed is:

* Decentralized: Each instance can follow one or more other PixelFed instances in order to allow their respective members to interact. A first pixelfed.social public body limited to 10,000 members has already been created.

* Federated: Via the ActivityPub protocol, PixelFed can interact with other software that is part of the Fediverse, such as Mastodon or PeerTube for example.

It is possible to import your data from Instagram.


**Versión actual:** 0.12.4-glitch.1.10.0~ynh1

## Capturas

![Captura de Pixelfed Glitch](./doc/screenshots/screenshot.png)

## Documentaciones y recursos

- Sitio web oficial: <https://pixelfed-glitch.github.io/docs/>
- Documentación usuario oficial: <https://pixelfed-glitch.github.io/docs/>
- Documentación administrador oficial: <https://pixelfed-glitch.github.io/docs/>
- Repositorio del código fuente oficial de la aplicación : <https://github.com/pixelfed-glitch/pixelfed>
- Catálogo YunoHost: <https://apps.yunohost.org/app/pixelfed_glitch>
- Reportar un error: <https://github.com/YunoHost-Apps/pixelfed_glitch_ynh/issues>

## Información para desarrolladores

Por favor enviar sus correcciones a la [rama `testing`](https://github.com/YunoHost-Apps/pixelfed_glitch_ynh/tree/testing).

Para probar la rama `testing`, sigue asÍ:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/pixelfed_glitch_ynh/tree/testing --debug
o
sudo yunohost app upgrade pixelfed_glitch -u https://github.com/YunoHost-Apps/pixelfed_glitch_ynh/tree/testing --debug
```

**Mas informaciones sobre el empaquetado de aplicaciones:** <https://yunohost.org/packaging_apps>
