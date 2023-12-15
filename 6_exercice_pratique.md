---
title: "6. Exercice Pratique"
---

# Exercice Pratique 

## Objectif :

L'objectif de cet exercice est de mettre en place un environnement de blog avec Ghost et MySQL en utilisant Docker. Vous allez apprendre à lancer et à connecter des conteneurs individuellement, à gérer les volumes pour la persistance des données et à configurer manuellement le réseau pour la communication entre les conteneurs.

## Instructions

Pour réaliser cet exerice pratique vous allez devoir : 
- Vous Familiarisez avec les images Docker officielles de [Ghos](https://hub.docker.com/_/ghost) et [MySQL](https://hub.docker.com/_/mysql) sur Docker Hub.
- Créer un réseau permetant une interconnexion avec les deux conteneur
- Configurer des volumes pour la persistance des donneés de Ghost et de Mysql
- Lancer les deux conteneurs
- Une fois les conteneurs en cours d'exécution, accédez à Ghost dans un navigateur pour vérifier que tout fonctionne correctement. Essayez de créer un post pour tester si les données sont correctement enregistrées dans MySQL.



**Livrables**

    - Les commandes Docker utilisées pour configurer l'environnement.
    - Une documentation décrivant votre processus, les configurations effectuées et les défis rencontrés.
    - Des captures d'écran de votre blog Ghost fonctionnel.