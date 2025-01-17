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

Par défaut, la vérification des e-mails est activée (ajustez le fichier `.env` si nécessaire). Si votre serveur ne peut pas envoyer d'emails, vous pouvez confirmer manuellement l'e-mail d'un compte dans l'interface d'administration, onglet `Modération`, et en utilisant la commande `php__PHP_VERSION__ __INSTALL_DIR__/artisan user:verify NomUtilisateur`.

### Désactiver l'indexation des moteurs de recherche

Si vous ne voulez pas que votre instance Pixelfed soit indexée dans le moteur de recherche (et ainsi de suite), modifiez `__INSTALL_DIR__/public/robots.txt` comme ceci :

```text
User-agent: *
Disallow: /
```

Remarque : les moteurs de recherche verront ce fichier et pourront ou non respecter son contenu.

Depuis la version 0.10.10, par défaut `/discover/places/`, `/stories/` et `/i/` sont présents dans ce fichier.
