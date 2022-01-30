# DASHBOARD DOCUMENTATION
\
by Guillaume Corbet and Samuel Parayre
<p>&nbsp;</p>

## Summary
1. [Compilation](#COMPILATION)
2. [Dependance](#Dependance)
3. [Service](#SERVICE)
    1. [Youtube](#youtube)
        1. [Channel subscriber](#ChannelSubscriber)
        2. [Video views](#VideoViews)
        3. [Video comments](#VideoComments)
    2. [Movie](#Movie)
        1. [Movie by release date](#MovieReleaseDate)
        2. [Movie by genre](#MovieGenre)
    3. [Weather](#Weather)
        1. [Current Weather by city](#CurrentWeather)
4. [.gitignore](#.gitignore)
<p>&nbsp;</p>

## COMPILATION

Build le projet :

> docker-compose build

Lancer le projet :

> docker-compose up

Build et run le projet

> docker-compose build && docker-compose up

<p>&nbsp;</p>

## Dependence

Nous utilisons express dans notre projet pour faciliter le travail avec le serveur

> npm install express
> npm install express-session
> npm install express-ejs-layout

Pour le front nous utilisons des fichiers ejs.

> npm install ejs

Pour le service youtube nous utilisons l'api google

> npm install googleapis
> npm google-auth-library

Pour la base de donnée on utilise mongoDb

> npm install mongoose
> npm install passport
> npm install bcrypt

Et pour les autres services fetch pour envoyer des requetes

> npm install node-fetch

Donc pour tout installer d'un coup il faut faire :

> npm install --save express express-session express-ejs-layouts ejs googleapis google-auth-library mongoose passport bcrypt node-fetch

<p>&nbsp;</p>

## SERVICE

Pour ce projet un nombre de 3 services était demandé nous avons donc fait 3 services, Youtube, Movie, Weather

### Youtube

Pour le service Youtube nous avons donc réalisé 3 widgets et nous avons utilisé l'Api google qui est fournis qui permet de faire des appels à Youtube

#### ChannelSubscriber

Ce widget permet de savoir le nombre d'abonnée en temps réel d'une chaine youtube

#### VideoViews

Ce widget permet de savoir le nombre de vue d'une vidéo

#### VideoComments

Ce widget permet d'afficher les 20 commentaires les plus populaire d'une vidéo

### Movie

Pour le service Movie nous avons donc réalisé 2 widgets, on a aussi utilisé fetch pour envoyer des requêtes directement a l'url de l'api de The movie db

#### MovieReleaseDate

Ce widget permet d'afficher les 20 films les plus populaires ayant été sortie a une certaine année

#### MovieGenre

Ce widget permet d'afficher les 20 films les plus populaires suivant un genre (ex: Action)

### Weather

Pour le service weather il ne nous restait qu'a faire un seul widget, nous avons aussi utilisé fetch de la même facon que pour movie

#### CurrentWeather

Ce widget permet d'afficher la température ainsi qu'une image de la météo d'une certaine ville

<p>&nbsp;</p>

## .gitignore

Il y a un fichier .gitignore pour vous empecher de push les fichiers et dossier non necessaire

- node_modules
- package-lock.json
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>