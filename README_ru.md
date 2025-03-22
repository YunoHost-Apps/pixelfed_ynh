<!--
Важно: этот README был автоматически сгенерирован <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
Он НЕ ДОЛЖЕН редактироваться вручную.
-->

# Pixelfed Glitch для YunoHost

[![Уровень интеграции](https://apps.yunohost.org/badge/integration/pixelfed_glitch)](https://ci-apps.yunohost.org/ci/apps/pixelfed_glitch/)
![Состояние работы](https://apps.yunohost.org/badge/state/pixelfed_glitch)
![Состояние сопровождения](https://apps.yunohost.org/badge/maintained/pixelfed_glitch)

[![Установите Pixelfed Glitch с YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=pixelfed_glitch)

*[Прочтите этот README на других языках.](./ALL_README.md)*

> *Этот пакет позволяет Вам установить Pixelfed Glitch быстро и просто на YunoHost-сервер.*  
> *Если у Вас нет YunoHost, пожалуйста, посмотрите [инструкцию](https://yunohost.org/install), чтобы узнать, как установить его.*

## Обзор

PixelFed Glitch s a decentralized and federated image sharing software under development. It is a fork of the officiel Pixelfed software.
In addition to taking over the functionality of Instagram, the functioning of PixelFed is:

* Decentralized: Each instance can follow one or more other PixelFed instances in order to allow their respective members to interact. A first pixelfed.social public body limited to 10,000 members has already been created.

* Federated: Via the ActivityPub protocol, PixelFed can interact with other software that is part of the Fediverse, such as Mastodon or PeerTube for example.

It is possible to import your data from Instagram.


**Поставляемая версия:** 0.12.4-glitch.1.10.0~ynh1

## Снимки экрана

![Снимок экрана Pixelfed Glitch](./doc/screenshots/screenshot.png)

## Документация и ресурсы

- Официальный веб-сайт приложения: <https://pixelfed-glitch.github.io/docs/>
- Официальная документация пользователя: <https://pixelfed-glitch.github.io/docs/>
- Официальная документация администратора: <https://pixelfed-glitch.github.io/docs/>
- Репозиторий кода главной ветки приложения: <https://github.com/pixelfed-glitch/pixelfed>
- Магазин YunoHost: <https://apps.yunohost.org/app/pixelfed_glitch>
- Сообщите об ошибке: <https://github.com/YunoHost-Apps/pixelfed_glitch_ynh/issues>

## Информация для разработчиков

Пришлите Ваш запрос на слияние в [ветку `testing`](https://github.com/YunoHost-Apps/pixelfed_glitch_ynh/tree/testing).

Чтобы попробовать ветку `testing`, пожалуйста, сделайте что-то вроде этого:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/pixelfed_glitch_ynh/tree/testing --debug
или
sudo yunohost app upgrade pixelfed_glitch -u https://github.com/YunoHost-Apps/pixelfed_glitch_ynh/tree/testing --debug
```

**Больше информации о пакетировании приложений:** <https://yunohost.org/packaging_apps>
