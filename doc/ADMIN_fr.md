### Administrateur

Après avoir été enregistré pour la première fois, vous devez exécuter la commande suivante pour promouvoir le premier enregistré en tant qu'administrateur

**Entrez la commande:**

    sudo php8.2 __INSTALL_DIR__/artisan user:admin 1

et répondez oui à la question « Ajouter des privilèges d'administrateur à cet utilisateur ? »

### Autoriser/Fermer les inscriptions

Les inscriptions sont ouvertes par défaut.
Pour modifier ce paramètre, modifiez `__INSTALL_DIR__/.env` et définissez `OPEN_REGISTRATION=false` au lieu de `true`.
Ensuite, exécutez `php8.2 artisan config:cache` depuis le dossier de l'application (dans `/var/www/pixelfed…`) pour recharger les paramètres.

### Vérification manuelle des emails
Par défaut, la vérification des emails est activée (ajustez le fichier `.env` si nécessaire). Si votre serveur ne peut pas envoyer d'emails, vous pouvez confirmer manuellement l'email d'un compte dans l'interface d'administration, onglet `Modération`, et en utilisant la commande `php8.2 artisan user:verify NomUtilisateur`.

### Désactiver l'indexation des moteurs de recherche

Si vous ne voulez pas que votre instance Pixelfed soit indexée dans le moteur de recherche (et ainsi de suite), modifiez `__INSTALL_DIR__/public/robots.txt` comme ceci :
```
Agent utilisateur: *
Interdire : /
```
Remarque : les moteurs de recherche verront ce fichier et pourront ou non respecter son contenu.

Depuis la 0.10.10, par défaut `/discover/places/`, `/stories/` et `/i/` sont présents dans ce fichier.
