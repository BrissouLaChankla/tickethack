
![Logo](https://ariane.lacapsule.academy/static/media/Lacapsulerose.76b0b010.png)


# TICKETHACK


L’objectif de ce projet est de créer un site de réservation de billets de trains : Tickethack. Vous allez devoir créer les différentes pages du frontend ainsi que la partie backend.


Commencez par regarder la vidéo de démonstration et lire l’intégralité du projet pour mieux le comprendre et vous répartir les tâches plus facilement.


#SETUP

Créez un dossier “tickethack” obligatoirement en dehors du setup de base et versionnez-le via Git et GitHub.


La partie frontend doit interagir via des fetch avec un backend webservice généré avec Express Generator. Vous êtes libres de créer et utiliser les modules de votre choix, tels que momentjs pour la gestion des dates.


Vous devez bien évidemment respecter le principe de clean code et si possible implémenter des TDD pour certaines fonctionnalités précises de votre application (la vérification des champs saisis, par exemple).

#GÉNÉRATION DES TRAJETS

À l’intérieur du setup de base, positionnez-vous dans le répertoire "tickethack" du dossier "week4" et exécutez la commande ariane fetch pour récupérer la ressource.


Vous trouverez quelques images ainsi qu’un script "generateTrips.js" qui vous permettra de générer une multitude de trajets de train grâce aux commandes "yarn install" puis "yarn generate".


Le fichier trips.json sera généré et contiendra tous les trajets à importer dans votre base de données.

#PAGE D'ACCUEIL

La page d’accueil permet de rechercher un trajet en fonction du départ, de l’arrivée et de la date.


La recherche devra être envoyée au backend qui renverra tous les trajets trouvés selon les paramètres de recherche


Le résultat de la recherche sera affiché sur la partie droite de la page d'accueil avec la possibilité d’ajouter les trajets au panier.

#PANIER

La page "cart" affiche tous les trajets ajoutés au panier avec la possibilité de les supprimer.


Au dessous de ces trajets se trouve le total du panier avec un bouton pour les payer. Au clic sur ce bouton,  le panier est vidé, les trajets payés sont enregistrés dans les réservations (bookings) et l’utilisateur est redirigé vers la page bookings.

#BOOKINGS

La page bookings affiche tous les trajets payés ainsi que le temps d’attente entre l’heure actuelle et celle du départ du trajet.

#BONUS

Une fois votre application développée, testée et fonctionnelle, vous pouvez la rendre accessible en déployant votre frontend et votre backend vers Vercel.


Pensez à utiliser un fichier .env pour gérer les informations liées à la connexion à votre base de données !
## Authors

- [Brice Eliasse](https:/brice-eliasse.com)


## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

