<!--
NOTA: Este README foi creado automáticamente por <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
NON debe editarse manualmente.
-->

# Pixelfed para YunoHost

[![Nivel de integración](https://apps.yunohost.org/badge/integration/pixelfed)](https://ci-apps.yunohost.org/ci/apps/pixelfed/)
![Estado de funcionamento](https://apps.yunohost.org/badge/state/pixelfed)
![Estado de mantemento](https://apps.yunohost.org/badge/maintained/pixelfed)

[![Instalar Pixelfed con YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=pixelfed)

*[Le este README en outros idiomas.](./ALL_README.md)*

> *Este paquete permíteche instalar Pixelfed de xeito rápido e doado nun servidor YunoHost.*  
> *Se non usas YunoHost, le a [documentación](https://yunohost.org/install) para saber como instalalo.*

## Vista xeral

PixelFed is a decentralized and federated image sharing software under development.
In addition to taking over the functionality of Instagram, the functioning of PixelFed is:

* Decentralized: Each instance can follow one or more other PixelFed instances in order to allow their respective members to interact. A first pixelfed.social public body limited to 10,000 members has already been created.

* Federated: Via the ActivityPub protocol, PixelFed can interact with other software that is part of the Fediverse, such as Mastodon or PeerTube for example.

It is possible to import your data from Instagram.


**Versión proporcionada:** 0.12.5~ynh1

## Capturas de pantalla

![Captura de pantalla de Pixelfed](./doc/screenshots/screenshot.png)

## Documentación e recursos

- Web oficial da app: <https://pixelfed.org/>
- Documentación oficial para usuarias: <https://docs.pixelfed.org/>
- Documentación oficial para admin: <https://docs.pixelfed.org/running-pixelfed/administration.html>
- Repositorio de orixe do código: <https://github.com/pixelfed/pixelfed>
- Tenda YunoHost: <https://apps.yunohost.org/app/pixelfed>
- Informar dun problema: <https://github.com/YunoHost-Apps/pixelfed_ynh/issues>

## Info de desenvolvemento

Envía a túa colaboración á [rama `testing`](https://github.com/YunoHost-Apps/pixelfed_ynh/tree/testing).

Para probar a rama `testing`, procede deste xeito:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/pixelfed_ynh/tree/testing --debug
ou
sudo yunohost app upgrade pixelfed -u https://github.com/YunoHost-Apps/pixelfed_ynh/tree/testing --debug
```

**Máis info sobre o empaquetado da app:** <https://yunohost.org/packaging_apps>
