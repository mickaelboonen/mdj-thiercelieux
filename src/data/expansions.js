/* eslint-disable quotes */
import thiercelieux from 'src/assets/pictures/games/base.jpg';
import newMoon from 'src/assets/pictures/games/nouvelle-lune.jpg';
import personnages from 'src/assets/pictures/games/personnages.jpg';
import village from 'src/assets/pictures/games/village.jpg';

import thiercelieuxIcon from 'src/assets/pictures/games/base-icon.png';
import newMoonIcon from 'src/assets/pictures/games/nouvelle-lune-icon.png';
import personnagesIcon from 'src/assets/pictures/games/personnages-icon.jpg';
import villageIcon from 'src/assets/pictures/games/village-icon.jpg';

import { newMoonCards } from './newMoonCards';
import { villagePeople } from './villagePeople';
// eslint-disable-next-line import/prefer-default-export
export const expansions = [
  {
    id: 1,
    name: 'Loup-Garou de Thiercelieux',
    hash: 'loup-garou-de-thiercelieux',
    image: thiercelieux,
    icon: thiercelieuxIcon,
    description: `<p>Dans "l'Est sauvage", le petit hameau de Thiercelieux est depuis peu devenu la proie des Loups-Garous. </p><p>Des meurtres sont commis chaque nuit par certains habitants du villages, devenus Lycanthropes à cause d'un phénomène mystérieux (peut-être l'effet de serre ?)... </p><p>Les Villageois doivent se ressaisir pour éradiquer ce nouveau fléau venu du fond des âges, avant que le hameau ne perde ses derniers habitants.</p>`,
    roles: [
      {
        id: 0,
        name: 'Chasseur',
      },
      {
        id: 1,
        name: 'Cupidon',
      },
      {
        id: 2,
        name: 'Loup-Garou',
      },
      {
        id: 3,
        name: 'Petite Fille',
      },
      {
        id: 4,
        name: 'Simple Villageois',
      },
      {
        id: 5,
        name: 'Sorcière',
      },
      {
        id: 6,
        name: 'Voleur',
      },
      {
        id: 7,
        name: 'Voyante',
      },
    ],
    specificity: [],
  },
  {
    id: 2,
    name: 'Nouvelle Lune',
    hash: 'nouvelle-lune',
    image: newMoon,
    icon: newMoonIcon,
    description: `<p>Bienvenue dans ce nouvel opus "Locatercien", puisqu'ainsi se nomment les habitants de Thiercelieux, hameau dévasté. </p><p> Le village étant devenu trop dangereux pour certains d'entre nous, c'est en exil forcé que nous mettons la dernière main à cet ouvrage. </p><p> Des messages secrets, au péril de leur vie, sont venus nous trouver dans notre retraite cachée et nous ont faits part de l'évolution de la terrible menace. </p><p> TOutefois la résistance s'organise et de nouveaux personnages aux talents prometteurs ont rejoint le combat contre les terribles Loups-Garous !</p>`,
    roles: [
      {
        id: 0,
        name: 'Ancien',
      },
      {
        id: 1,
        name: 'Bouc émissaire',
      },
      {
        id: 2,
        name: 'Idiot du Village',
      },
      {
        id: 3,
        name: 'Joueur de Flute',
      },
      {
        id: 4,
        name: 'Salvateur',
      },
    ],
    specificity: [
      {
        name: 'Variantes',
        hash: 'variantes',
        description: '<p>En dehors des règles de base, il existe de nombreuses façons de jouer aux Loups-Garous de Thiercelieux.</p><p>Ces variantes résultent des facéties que nous nous permettons durant les innombrables parties que nous avons animées ainsi qu\'une sélection de certaines de vos nombreuses propositions postées sur notre site <a href="www.loups-garous.com">www.loups-garous.com</a>."</p><p>Nous vous proposons ici le meilleur de ces variantes, testées et optimisées pour renouveler votre plaisir de jouer.',
        rules: [
          {
            id: 1,
            name: 'Clair de Lune',
            hash: 'clair-de-lune',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi ad ratione minus, mollitia, eveniet dolore corporis quasi accusantium at facere asperiores eos neque aut rem excepturi beatae veniam a!',
          },
          {
            id: 2,
            name: 'La communauté des hameaux',
            hash: 'la-communauté-des-hameaux',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi ad ratione minus, mollitia, eveniet dolore corporis quasi accusantium at facere asperiores eos neque aut rem excepturi beatae veniam a!',
          },
          {
            id: 3,
            name: '"Entout cas c\'est sûrement pas lui !"',
            hash: 'en-tout-cas-c-est-surement-pas-lui',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi ad ratione minus, mollitia, eveniet dolore corporis quasi accusantium at facere asperiores eos neque aut rem excepturi beatae veniam a!',
          },
          {
            id: 4,
            name: 'Murs-murs',
            hash: 'murs-murs',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi ad ratione minus, mollitia, eveniet dolore corporis quasi accusantium at facere asperiores eos neque aut rem excepturi beatae veniam a!',
          },
          {
            id: 5,
            name: 'Double-"je"',
            hash: 'double-je',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi ad ratione minus, mollitia, eveniet dolore corporis quasi accusantium at facere asperiores eos neque aut rem excepturi beatae veniam a!',
          },
          {
            id: 6,
            name: 'Fête de la moisson',
            hash: 'fete-de-la-moisson',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi ad ratione minus, mollitia, eveniet dolore corporis quasi accusantium at facere asperiores eos neque aut rem excepturi beatae veniam a!',
          },
          {
            id: 7,
            name: 'La peste noire',
            hash: 'la-peste-noire',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi ad ratione minus, mollitia, eveniet dolore corporis quasi accusantium at facere asperiores eos neque aut rem excepturi beatae veniam a!',
          },
          {
            id: 8,
            name: 'Fascination lycanthropique',
            hash: 'fascination-lycanthropique',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi ad ratione minus, mollitia, eveniet dolore corporis quasi accusantium at facere asperiores eos neque aut rem excepturi beatae veniam a!',
          },
        ],
      },
      {
        name: 'Nouvelle Lune',
        hash: 'nouvelle-lune',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, accusamus dolorum et beatae quos eveniet repudiandae, hic consectetur voluptatum aspernatur dolorem dignissimos tempore. Dicta ea nostrum, illum assumenda modi nihil aliquam officia dignissimos, debitis perspiciatis quos corporis architecto illo odit nemo consectetur nesciunt fuga, quidem eligendi doloribus? Ut, vitae doloribus.',
        rules: newMoonCards,
      },
    ],
  },
  {
    id: 3,
    name: 'Personnages',
    hash: 'personnages',
    image: personnages,
    icon: personnagesIcon,
    description: `<p>Depuis de nombreux cycles lunaires, la quiétude était enfin revenue dans les environs de "Thiercelieux". Jusqu'à ce qu'un "enfançon sauvage" regagne la forêt profonde et commence à hurler chaque nuit. </p><p> Peu de temps après, de nouvelles disparitions mystérieuses ainsi que d'atroces vestiges criminels convainquirent les habitants du village que des monstres polymorphes encore plus redoutables vivaient parmi eux. <br/>Ils convoquèrent alors, depuis les confins de la contrée, d'autres "<b>Personnages</b>" très puissants, pour lutter contre cette abominable engeance...</p>`,
    roles: [
      {
        id: 0,
        name: '2 Soeurs',
      },
      {
        id: 1,
        name: '3 Frères',
      },
      {
        id: 2,
        name: 'Abominable Sectaire',
      },
      {
        id: 3,
        name: 'Ange',
      },
      {
        id: 4,
        name: "Chevalier à l'Épée Rouillée",
      },
      {
        id: 5,
        name: 'Chien-Loup',
      },
      {
        id: 6,
        name: 'Comédien',
      },
      {
        id: 7,
        name: 'Enfant Sauvage',
      },
      {
        id: 8,
        name: 'La Gitane (sans Philtre)',
      },
      {
        id: 9,
        name: 'Grand Méchant Loup',
      },
      {
        id: 10,
        name: 'Infect Père des Loups',
      },
      {
        id: 11,
        name: 'Juge Bègue',
      },
      {
        id: 12,
        name: "Montreur d'Ours",
      },
      {
        id: 13,
        name: 'Renard',
      },
      {
        id: 14,
        name: 'Servante Dévouée',
      },
      {
        id: 15,
        name: 'Villageois Villageois',
      },
    ],
    specificity: [],
  },
  {
    id: 4,
    name: 'Le Village',
    hash: 'le-village',
    image: village,
    icon: villageIcon,
    description: "<p>Le village de Thiercelieux n'était plus qu'un désert de ruines. De tous les recoins du pays, les volontaires ont afflué pour s'installer dans les maisons, les fermes et les échoppes flambant neuves et recréer une vie digne de ce site merveilleux.</p><p>Toutefois il demeure que certains esprits chagrins font courir un bruit inquétant : de sinistres loups-garous se seraient immiscés dans leur nouvelle communauté !</p>",
    roles: [
      {
        id: 0,
        name: 'Corbeau',
      },
      {
        id: 1,
        name: 'Loup-Garou Blanc',
      },
      {
        id: 2,
        name: 'Pyromane',
      },
    ],
    specificity: [
      {
        name: 'Le Village',
        hash: 'le-village',
        description: '',
        rules: villagePeople,
      },
    ],
  },

];
