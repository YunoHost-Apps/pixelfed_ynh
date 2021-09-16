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
