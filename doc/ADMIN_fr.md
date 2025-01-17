### Administrateur

Après avoir été enregistré pour la première fois, vous devez exécuter la commande suivante pour promouvoir votre compte en tant qu'administrateur :

`sudo php__PHP_VERSION__ __INSTALL_DIR__/artisan user:admin`

Renseignez votre pseudo et répondez oui à la question « Add admin privileges to this user? »

Vous pouvez également créer le compte et le rendre administrateur directement avec la commande suivante :

`sudo php__PHP_VERSION__ __INSTALL_DIR__/artisan user:create`

### Autoriser/Fermer les inscriptions

Les inscriptions sont ouvertes par défaut.
Pour modifier ce paramètre, modifiez `__INSTALL_DIR__/.env` et définissez `OPEN_REGISTRATION=false` au lieu de `true`.
Ensuite, exécutez `php__PHP_VERSION__ __INSTALL_DIR__/artisan config:cache` pour recharger les paramètres.

### Vérification manuelle des e-mails

Par défaut, la vérification des e-mails est activée (ajustez le fichier `.env` si nécessaire). Si votre serveur ne peut pas envoyer d'e-mails, vous pouvez confirmer manuellement l'e-mail d'un compte dans l'interface d'administration, onglet `Modération`, et en utilisant la commande `php__PHP_VERSION__ __INSTALL_DIR__/artisan user:verify NomUtilisateur`.

### Désactiver l'indexation des moteurs de recherche

Si vous ne voulez pas que votre instance Pixelfed soit indexée dans le moteur de recherche (et ainsi de suite), modifiez `__INSTALL_DIR__/public/robots.txt` comme ceci :

```text
User-agent: *
Disallow: /
```

Remarque : les moteurs de recherche verront ce fichier et pourront ou non respecter son contenu.

Depuis la version 0.10.10, par défaut `/discover/places/`, `/stories/` et `/i/` sont présents dans ce fichier.

### Appliquer les changements à partir du fichier de configuration `.env`.

Une fois que vous avez fait des changements, vous devez lancer `php__PHP_VERSION__ __INSTALL_DIR__/artisan config:cache && php__PHP_VERSION__ __INSTALL_DIR__/artisan cache:clear` pour les appliquer.
Note : ceci déconnectera tout compte connecté (y compris depuis l'interface web d'administration).

### Suppression du cache des avatars pour économiser de l'espace

`php__PHP_VERSION__ __INSTALL_DIR__/artisan avatar:storage-deep-clean`

Utilisez-le pour supprimer les vieux avatars qui sont obsolètes ou qui ne sont plus utilisés. Cela peut permettre d'économiser de l'espace disque.

### Réparer les avatars manquants ou les récupérer

`php__PHP_VERSION__ __INSTALL_DIR__/artisan avatar:storage`

Il peut être utilisé pour récupérer des avatars distants qui ne sont pas chargés (ou dans le cas où vous avez supprimé `__INSTALL_DIR__/storage/app/public/cache/avatars` où ils sont stockés).
Il pourrait également être utile de migrer ce cache (uniquement, pas les autres médias existants) vers un stockage S3, en les refactorisant tous.

Soyez conscient que cela va générer un grand nombre de « jobs » qui prendront du temps à être complétés, et qui auront une charge significative sur votre serveur (en particulier la bande passante et le CPU).

### Lors de l'utilisation de S3

- Supprimer les médias non utilisés qui n'ont pas été nettoyés (cela arrive) : `php__PHP_VERSION__ __INSTALL_DIR__/artisanmedia:gc` (Supprimer les médias téléchargés qui ne sont pas attachés à un statut actif)

- Idem mais pour les médias stockés sur S3 et toujours stockés localement (double) : `php__PHP_VERSION__ __INSTALL_DIR__/artisan media:s3gc` (Supprimer les téléchargements de médias (locaux) qui existent sur S3)

- Migrer vos médias vers un stockage S3 (vous devez d'abord le configurer), de sorte que les médias téléchargés avant la configuration de S3 y soient migrés : `php__PHP_VERSION__ artisanmedia:migrate2cloud` (Déplacer les anciens médias vers le stockage en nuage)

- Migrer d'un backend S3 à l'autre (changer la configuration d'abord) : `php__PHP_VERSION__ __INSTALL_DIR__/artisanmedia:cloud-url-rewrite` (Réécrire les urls des médias S3 à partir des utilisateurs locaux)
