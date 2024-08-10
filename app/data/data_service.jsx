import cree from '../../public/icone/cree_site.svg';
import seo from '../../public/icone/optimisation.svg';
import consultant from '../../public/icone/consultant.svg';
import maintenance from '../../public/icone/upload-solid.svg';

const dataService = [
    {
      id : 1,
      icon: cree,
      alt: 'Creation de site',
      title: 'Conception de sites web',
      description: `Transformez votre vision en un site web dynamique qui capte l'attention et offre une expérience utilisateur fluide.
                    Chaque élément, de la conception à la réalisation, est méticuleusement travaillé pour refléter votre identité et répondre aux besoins de votre public.
                    Je crée des sites qui engagent et convertissent vos visiteurs en clients fidèles.`,
      benefice:[`Expérience sur mesure : Créez une expérience en ligne unique qui reflète parfaitement votre marque et engage vos visiteurs.`,`
                Optimisation pour la conversion : Transformez les visiteurs en clients grâce à un design intuitif et axé sur les résultats.`,`
                Scalabilité : Votre site est conçu pour évoluer avec votre entreprise, en s'adaptant à vos besoins croissants.`],
      cta:`Transformez votre vision en un site web captivant.
            Prêt à captiver votre audience en ligne ?`
    },
    {
      id : 2,
      icon: seo,
      alt: 'Optimisation et Seo',
      title: 'Optimisation SEO et des Performances',
      description: `Propulsez votre site en tête des résultats de recherche tout en assurant une performance optimale.
                     Mon expertise en SEO et optimisation technique garantit une expérience utilisateur rapide et efficace,
                    renforçant ainsi votre visibilité en ligne.`,
      benefice:[`Visibilité accrue : Améliorez votre classement sur Google pour être trouvé par vos clients potentiels.`,`
                 Rapidité et efficacité : Un site plus rapide signifie moins de rebonds et une meilleure expérience utilisateur.`,`
                 ROI amélioré : Maximisez votre retour sur investissement avec une stratégie SEO solide qui génère des résultats durables.`],
      cta:`Boostez votre visibilité en ligne.
          Ne perdez plus de clients à cause d'un site lent et mal referencé.`
    },
    {
      id : 3,
      icon: consultant,
      alt: 'Consultant Web',
      title: 'Consultation et Conseils',
      description: `Bénéficiez de conseils personnalisés pour transformer vos idées en stratégies digitales performantes.
                     Ensemble, nous élaborons des solutions sur mesure qui maximisent votre impact dans l’univers numérique.`,
      benefice:[`Stratégie personnalisée : Recevez des conseils sur mesure qui alignent votre stratégie digitale avec vos objectifs commerciaux.`,`
                 Expertise éprouvée : Bénéficiez d'une expertise pointue pour résoudre vos défis numériques et saisir de nouvelles opportunités.`,`
                 Décision éclairée : Prenez des décisions stratégiques basées sur des analyses détaillées et des conseils avisés.`],
      cta:`Transformez vos idées en succès numérique. Discutez de votre projet avec un expert dès aujourd'hui.`
    },
    {
      id : 4,
      icon: maintenance,
      alt: 'Maintenance Web',
      title: 'Maintenance et Optimisation de vos Applications Web',
      description: `Assurez la longévité et l'efficacité de vos applications web avec un service de maintenance régulier.
                     Je m'occupe des mises à jour, de la sécurité,
                     et des optimisations nécessaires pour que votre application reste toujours performante et à jour.`,
      benefice:[`Sécurité renforcée : Protégez vos données et vos utilisateurs avec une sécurité à jour et proactive.`,`
                  Disponibilité maximale : Gardez votre application en ligne et fonctionnelle, sans interruption.`,`
                  Performance continue : Améliorez l'efficacité de votre application pour offrir une expérience utilisateur sans faille.`],
      cta:`Assurez la tranquillité d'esprit avec une application toujours à jour, préservez la performance de votre application.`
    }
  ];

  export default dataService;