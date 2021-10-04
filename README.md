# Le Maître du Jeu de Thiercelieux

## Description

Toi aussi t'es toujours le Maître du Jeu quand tu joues au Loup-Garou de Thiercelieux ? T'aimerais bien incarner la Sorcière, un Loup ou même un Simple Villageois mais personne à part toi ne peut faire le Maître du Jeu ? Alors cette appli est faite pour toi ! Grace au Guide 100% interactif du MdJ, n'importe qui peut maintenant remplir le rôle de MdJ sans risquer de faire foirer les parties et de fait, te remplacer. Il n'y a qu'à se laisser bercer par l'application qui guidera tes pas tout au long de la partie sans risque de fausse note. Plus besoin de se soucier du côté technique, ton seul job sera de trouver les mots justes pour installer une ambiance propice au jeu, au bluff et à la trahison.


## Installation

<!-- TODO -->

### Frontend

1. Utiliser la commande `yarn` pour installer toutes les dépendances une fois le repo cloné.
2. Utiliser la commande `yarn start` pour lancer l'application dans le navigateur sur le port 8080.
3. L'application a besoin du back pour fonctionner correctement.

### Backend

1. Cloner le repo [mdj-thiercelieux-api](https://github.com/mickaelboonen/mdj-thiercelieux-api)
2. Utiliser la commande `yarn` pour installer toutes les dépendances une fois le repo cloné.
3. Utiliser la commande `yarn start` pour lancer l'application dans le navigateur sur le port 3000.
4. Dans le cas où la BDD n'est pas encore installée sur le serveur AWS, installer la BDD localement grâce au fichier [werewolves.sql](docs/werewolves.sql).
5. Dans le projet `mdj-thiercelieux-api`, créer un fichier `.env` à la racine du projet en suivant les indications dans .env-exemple. Ne pas oublier de renseigner le fichier `.env` dans le gitignore.

## User Stories

[Trello du projet](https://trello.com/invite/b/RFmwat5S/e90842d86bde297f23ab6be8640a755f/mdj-de-thiercelieux)
