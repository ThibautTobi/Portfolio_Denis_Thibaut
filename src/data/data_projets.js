import booki from '../../public/images/Booki.webp';
import sophie from '../../public/images/Sophie_Bluel.webp';
import qwenta from '../../public/images/qwenta.webp';
import nina from '../../public/images/Nina_Carducci.webp';
import kasa from '../../public/images/Kasa.webp';
import grimoire from '../../public/images/Grimoire.webp';
import portfolio from '../../public/images/Portfolio_Denis_Thibaut_V1.jpg';

export const dataProjets = [
    {
        id : 1,
        name : 'Booki',
        projet : 'Projet : OpenClassrooms',
        image : booki,
        lien : 'https://github.com/ThibautTobi/Projet_2.git',
        langage : ['HTML', 'CSS'] ,
        description : `Création de la page d'accueil d'une agence de voyage Booki en HTML & CSS,
        la page est en responsive pour tous type d'écran.`,
        problematique : `les problématiques que j'ai pu avoir ce sont la partie responsive sur les trois types d'écrans conforme a la maquette`,
        competence :[
            `- versionner son projet avec git et github.`,
            `- installer un environnement de développement front-end.`,
            `- intégration web avec html et css.`,
            `- intégrer du contenu conformément à une maquette.`,
            `- utilisation de Fontawesome.`,
            `- implémenter une interface responsive.`,
            `- versionner son projet avec git et github.`,
            `- installer un environnement de développement front-end.`
        ]
        },
        {
        id : 2,
        name : 'Sophie Bluel',
        projet : 'Projet : OpenClassrooms',
        image : sophie,
        lien : 'https://github.com/ThibautTobi/Projet_3_Portfolio-architecte-sophie-bluel.git',
        langage : ['HTML', 'CSS', 'JavaScript'] ,
        description : `Créez une page web dynamique pour le portfolio de Sophie Bluel avec JavaScript.`,
        problematique : `les interactions avec le langage JavaScipt et la modal `,
        competence :[
            `- versionner son projet avec git et github.`,
            `- installer un environnement de développement front-end.`,
            `- développement web avec JavaScript`,
            `- récupérer les données utilisateurs dans le JavaScript via des formulaires.`,
            `- manipuler les éléments du DOM avec JavaScript.`,
            `- gérer les événements utilisateurs avec JavaScript.`
        ]
        },
        {
        id : 3,
        name : 'Qwenta',
        projet : 'Projet : OpenClassrooms',
        image : qwenta,
        lien : 'https://github.com/ThibautTobi?tab=repositories',
        langage : ['Gestion de Projet'] ,
        description : `Planifiez le développement du site de votre client Qwenta.`,
        problematique : `la recherche des bonnes technologie adapté au projet et decoupage de tache`,
        competence :[
            `- suivre le déroulement du projet grâce à un outil de gestion de projet (trello).`,
            `- rédiger les spécifications techniques d'un projet web à partir des besoins fonctionnels.`,
            `- découper une fonctionnalité en tâches pour préparer le développement.`,
            `- présenter la solution technique.`,
            `- mettre en place une méthode de veille technologique.`,
            `- rédiger un cahier de recette pour tester un site.`
        ]
        },
        {
        id : 4,
        name : 'Nina Carducci',
        projet : 'Projet : OpenClassrooms',
        image : nina,
        lien : 'https://github.com/ThibautTobi/P5_Nina_Carducci.git',
        langage : ['HTML', 'CSS' ,'JavaScript'] ,
        description : `Débuggez et optimisez un site de photographe Nina Carducci.`,
        problematique : `l'amelioration des performances`,
        competence :[
            `- versionner son projet avec git et github.`,
            `- installer un environnement de développement front-end.`,
            `- optimiser les performances d'un site web.`,
            `- débugger un site web grâce aux chrome devtools.`,
            `- optimiser l'accessibilité avec wave evaluation tool.`,
            `- développement web avec JavaScript`
        ]
        },
        {
        id : 5,
        name : 'Kasa',
        projet : 'Projet : OpenClassrooms',
        image : kasa,
        lien : 'https://github.com/ThibautTobi/P6_Site_Kasa_Location_immobiliere.git',
        langage : ['HTML', 'CSS', 'JavaScript' ,'React'] ,
        description : `Créez une application web de location immobilière pour le client Kasa avec React.`,
        problematique : `l'utilisation des composants et UseEffect`,
        competence :[
            `- versionner son projet avec git et github.`,
            `- installer un environnement de développement front-end.`,
            `- initialiser une application avec create react app.`,
            `- configurer la navigation entre les pages de l'application avec react router.`,
            `- développer des éléments de l'interface d'un site web grâce à des composants react.`
        ]
        },
        {
        id : 6,
        name : 'Mon Vieux Grimoire',
        projet : 'Projet : OpenClassrooms',
        image : grimoire,
        lien : 'https://github.com/ThibautTobi/P7-Back-End-Mon-Vieux-Grimoire.git',
        langage : ['Node Js', 'Express','mongoose','Mongo DB'] ,
        description : `Développez le back-end d'un site Mon Vieux Grimoire de notation de livres.`,
        problematique : `la securisation des donnés`,
        competence :[
            `- versionner son projet avec git et github.`,
            `- installer un environnement de développement back-end.`,
            `- implémenter un modèle logique de données conformément à la réglementation.`,
            `- mettre en oeuvre des opérations CRUD de manière sécurisée.`,
            `- stocker des données de manière sécurisée.`,
            `- utilisation d'une base de donnée`
        ]
        },
        {
        id : 7,
        name : 'portfolio',
        projet : 'Projet : OpenClassrooms',
        image : portfolio,
        lien : 'https://thibauttobi.github.io/Portfolio-Thibaut/',
        langage : ['HTML','CSS','React','Node Js', 'Express','mongoose','Mongo DB'] ,
        description : `Développez Mon propre PortFolio.`,
        problematique : `trouver un bon design`,
        competence :[
            `- création d'une page web React.`,
            `- mise en forme et style avec le css.`,
            `- utilisation de Fontawesome.`,
            `- utilisation de Materiel UI.`,
            `- versionner son projet avec git et github.`,
            `- installer un environnement de développement back-end.`,
            `- implémenter un modèle logique de données conformément à la réglementation.`,
            `- mettre en oeuvre des opérations CRUD de manière sécurisée.`,
            `- stocker des données de manière sécurisée.`,
            `- utilisation d'une base de donnée`
        ]
        }
];