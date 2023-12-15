---
title: 4. Volumes Docker
---

## Volumes Docker

Dans cette partie, nous allons découvrir le principe de volume persistant et découvrir
en quoi il est utile dans un contexte de production. Pour nous appuyer sur un exemple concret, nous allons utiliser une image Mariadb (tag latest) pour faire nos manipulations.

Dans un premier temps, lancez un conteneur avec l’image Mariadb. Votre conteneur
devra écouter sur le port **3306** et vous définirez les credentials (user/pwd) nécessaires
pour la connexion. Une fois cela fait, vous allez devoir vous connecter avec un outil de
gestion de BDD (Datagrip, phpMyAdmin, Phpstorm...). Vous allez créer une base
de données, avec une table et injecter des données fictives de votre choix. Par exemple,
vous pouvez choisir :
- Nom de la base de données : mydatabase
- Nom d’une table : user
- Champs de la table : nom, prénom, age.

Ne perdez pas votre temps sur la création de cette base de données (et le type de
champs), elle n’est là qu’à titre de support pour notre cours.
Un fois cela fait, stopper et supprimer votre conteneur. Puis essayer de recréer le
conteneur. 

Est ce que vos données sont encore présentes ?

Maintenant, vous allez essayer de refaire les premières étapes en ajoutant un volume
persistant à votre conteneur. Pour rappel, les étapes sont :

- Lancement de mon conteneur avec l’image MariaDB (avec le volume persistant
cette fois)
- Création BDD + Table + injection de données
- Stop et suppression du conteneur
- Relancer le conteneur


**Livrables**
    
    - Avoir une base de données qui tourne sur le port 3306 avec des données
    persistantes
    - Expliquer le principe de volume Docker et son utilité
    - Quelle est la différence entre une application statefull et stateless ? 