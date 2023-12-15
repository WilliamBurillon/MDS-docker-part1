---
title: 5. Reseaux Docker
---

## Réseaux Docker


Continuons notre apprentissage de Docker. Nous allons aborder des concepts clés pour une utilisation quotidienne efficace de Docker, aussi bien pour la conception que pour le dépannage.

L'idée du réseau peut sembler intimidante, mais Docker rend ce concept fascinant et enrichissant. Au-delà de la conteneurisation, Docker vous initie à des aspects systémiques plus larges comme les namespaces sous Linux, bien que ceux-ci soient peu exploités habituellement. Commençons donc par les bases.

Comme je le dis souvent, il est important de maîtriser les bases avant de se lancer dans des tâches plus complexes, une approche qui n'est pas toujours la norme dans le monde de l'IT.

Nous parlerons fréquemment de bridges, en particulier de Docker0, et la gestion des ports sera un sujet récurrent. Vous vous demanderez peut-être comment exposer un port spécifique, quel est le port d'un conteneur ou comment se fait le mappage des ports d'une application. Il y a souvent des confusions terminologiques ici. Par exemple, on parle couramment d'"exposition" de port, alors qu'il s'agit en réalité de "publication" de port.

Avant de nous pencher sur les ports, il est essentiel de comprendre que Docker offre différents modes de réseau, tels que :

    - Faites une recherche sur les différents mode de réseau (Liste + Explication)

Pour l'instant, nous nous concentrerons sur le bridge Docker, nommé par défaut docker0.

Avec Docker, chaque conteneur se voit attribuer une adresse IP via ce bridge, mais ces adresses ne sont pas permanentes. Elles peuvent changer suite à des redémarrages, donc il est crucial de ne pas s'y fier outre mesure.

Alors, comment gérer sans utiliser directement les adresses IP ? Plusieurs solutions existent, comme le mappage de ports entre le conteneur et l'hôte, l'utilisation de DNS ou de l'API/socket Docker.

Abordons le mappage de ports. Cela consiste à associer un port du conteneur, disons le port 80 pour un conteneur nginx, à un port de la machine hôte, par exemple 8080.

Ainsi, pour accéder au conteneur nginx depuis l'extérieur :

- Vous utilisez l'adresse de votre machine hôte, par exemple 12.168.10.20:8080 (ou localhost:8080 dans le cas où vous restez sur votre machine).
- Docker, via des règles iptables, redirige automatiquement cette requête vers le 172.17.0.2:80 du conteneur.

Comment procéder alors ? Il y a deux méthodes : le publish simple et le publish all.

Avec un publish simple, vous utilisez la commande suivante :

`docker run -d --name c1 -p 8080:80 nginx:latest` 

Ici, le port 8080 de votre machine hôte redirige vers le port 80 du conteneur c1.

Pour un publish all, la commande serait :

`docker run -d --name c1 -P nginx:latest`

Cette méthode est moins intuitive. Il faut que l'image nginx ait un port défini avec la clause EXPOSE, et les ports exposés seront mappés à des ports aléatoires de la machine hôte, commençant à 32000.

Il est donc important de comprendre que publier un port ne signifie pas l'exposer. L'exposition est juste une déclaration, sans indication sur l'utilisation du port.

Maintenant, créons notre propre bridge ! Docker Network est un outil pratique pour cela, une CLI dédiée à la gestion des réseaux Docker, y compris des bridges.

Pour créer votre propre bridge, par exemple mds0, utilisez :

`docker network create --driver=bridge --subnet=192.168.0.0/24 mds0`

Pour l'utiliser avec un conteneur :

`docker run -d --name c1 --network xavki0 nginx:latest` 

Un avantage intéressant est que si vous ajoutez un autre conteneur au même réseau, ils pourront utiliser la résolution DNS entre eux par leurs noms. C'est une fonctionnalité très pratique !

**Livrables**

    - Quels sont les modes de réseaux les plus courament utilisé ? 
    - Lancer un conteneur qui utilise l'image nginx:latest. En utilisant les commandes adéquates, vous devez trouver :
        - La liste des réseaux docker sur votre machine 
        - A quel réseau appartient ce conteneur
