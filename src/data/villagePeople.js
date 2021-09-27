import loupGarou from 'src/assets/pictures/roles/loup-garou.png';
import farmer from 'src/assets/pictures/roles/village/fermier.jpg';
import barber from 'src/assets/pictures/roles/village/barbier.jpg';
// eslint-disable-next-line import/prefer-default-export
export const villagePeople = [
  {
    id: 1,
    name: 'Le Fermier',
    token: loupGarou,
    image: farmer,
    description: "Dans nos chères campagnes, les Fermiers sont nombreux et leur influence reste très importante. Dès le deuxième tour, les Fermiers débattent et votent pour désigner parmi eux le Capitaine. S'il est éliminé, le Capitaine désigne sqon successeur uniquement parmi les Fermiers survivants. Si le dernier Fermier est éliminé, il n'y a plus de Capitaine.",
    permanentPower: true,
    max: 6,
  },
  {
    id: 2,
    name: 'Le Confesseur',
    token: loupGarou,
    image: loupGarou,
    description: "Ce personnage peut entendre en confession un paroissien de son choix dont il voudrait connaître les secrets. N'importe quand durant la journée, même après la désignation par vote du joueur éliminé, le Confesseur désigne un joueur qui aura l'obligation immédiate de lui montrer secrètement sa carte personnage.",
    permanentPower: false,
    max: 1,
  },
  {
    id: 3,
    name: 'Le Rebouteux',
    token: loupGarou,
    image: loupGarou,
    description: "En quelques secondes, notre talentueux Rebouteux peut vous rendre votre jeunesse ainsi que tous ses bienfaits. N'importe quand durant la journée, le Rebouteux peut rendre à un joueur le pouvoir unique qu'il a déjà utilisé. Le meneur rend au joueur le jeton qui rétablit le pouvoir lié à son bâtiment (pour un nouvel usage unique).",
    permanentPower: false,
    max: 1,
  },
  {
    id: 4,
    name: "L'Institutrice",
    token: loupGarou,
    image: loupGarou,
    description: "Au village, l'Institutrice réprimande souvent ceux qui montrent du doigt. Chaque jour, juste avant les votes, l'Institutrice peut interdire à deux joueurs au plus de voter durant ce tour. Elle ne vote jamais. L'Institutrice et les joueurs empêchés de voter peuvent débattre lors du conseil du village. L'Institutrice peut empêcher le Tavernier de voter. L'institutrice n'empêche aucun Vagabond de voter.",
    permanentPower: true,
    max: 1,
  },
  {
    id: 5,
    name: 'Le Boulanger',
    token: loupGarou,
    image: loupGarou,
    description: "A Thiercelieux, c'est toujours lui le premier réveillé pour préparer sa fournée quotidienne. Parfois, juste avant l'aube, il lui semble apercevoir des Loups-Garous qui rentrent de leur forfait...  Chaque nuit, le Boulanger ouvre les yeux immédiatement après que le meneur de jeu ait fini de prononcer la phrase '...les Loups-Garous s'endorment!'. Après quelques instants le meneur demande au Boulanger de se rendormir.",
    permanentPower: true,
    max: 1,
  },
  {
    id: 6,
    name: 'Le Barbier',
    token: loupGarou,
    image: barber,
    description: "Ce fameux Barbier est un artiste du rasoir. Il lui arrive parfois de profiter de son outil pour faire justice tout seul, afin d'éliminer un personnage qu'il juge suspect... N'importe quand durant la journée, le Barbier peut éliminer un joueur de son choix. Si le joueur éliminé est un Loup-Garou, le Barbier est félicité par le village et survit à son acte. Sinon le Barbier est aussitôt éliminé. Le Barbier ne peut pas éliminer un Vagabond.",
    permanentPower: false,
    max: 1,
  },
  {
    id: 7,
    name: 'Le Tavernier',
    token: loupGarou,
    image: loupGarou,
    description: "Pour faire prospérer son commerce, il a à coeur de ne s'attirer les foudres d'aucun genre de clientèle, sourtout que sa taverne est ouverte de l'aube à la nuit tombée... Les Loups-Garous ne le dévorent pas et les villageois ne peuvent pas voter contre lui. S'il a voté contre une personne qui se trouve éliminée (même graciée), il perd son immunité et son jeton. La tradition veut qu'il vote toujours seul avant les autres (sauf s'il a perdu son immunité), ce qui peut compliqué sa tâche. Remarque : Bien sûr, tous les pouvoirs spéciaux peuvent s'appliquer contre lui (son immunité n'est que relative).",
    permanentPower: true,
    max: 1,
  },
  {
    id: 8,
    name: 'Le Bailli',
    token: loupGarou,
    image: loupGarou,
    description: "Représentant de l'ordre et de la loi, c'est lui qui porte la responsabilité d'attribuer les logements vacances aux Vagabonds. Lorsqu'un bâtiment se libère, le Bailli peut désigner un Vagabond de son choix. Ce Vagabond change de place pour s'asseoir derrière le bâtiment, rend son jeton baluchon et récupère le 'jeton pouvoir' associé au bâtiment s'il était déjà utilisé. Si un matin plusieurs bâtiments sont libres, on procédera de même pour chaque bâtiment. Remarque: l'élimination du Bailli entraîne la fin de la distribution des logements. La maison du Bailli restera vide. Les Vagabonds ont donc tout intérêt à protéger le Bailli s'ils espèrent récupérer un logis !",
    permanentPower: true,
    max: 1,
  },
  {
    id: 9,
    name: 'Le Châtelain',
    token: loupGarou,
    image: loupGarou,
    description: "Bien entendu son attitude hautaine est parfois énervante, mais c'est le seul qui par une tradition ancienne et non abolie à ce jour, peut grâcier un condamné. Le Châtelain reste donc une personnalité respectée avec laquelle il vaut mieux être en bons termes. Après n'importe quel vote, le Châtelain peut, sur demande de la future victime, faire grâce à un Villageois désigné par le vote du village. Le joueur ne sera donc pas éliminé et ne révélera pas sa carte. Un Châtelain égoïste peut évidemment se gracier lui-même...",
    permanentPower: false,
    max: 1,
  },
  {
    id: 10,
    name: 'Le Vagabond',
    token: loupGarou,
    image: loupGarou,
    description: "Ces courageux sans-logis n'aspirent qu'à intégrer le village afin de laisser libre cours à leurs désirs de se rendre utiles... Les pouvoirs de l'Institutrice, du Barbier, du Corbeau et du Pyromane n'ont pas d'effet sur les Vagabonds. Lorsqu'un bâtiment se libère, le Bailli désigne un Vagabond de son choix. Le joueur change de place pour s'asseoir derrière ce bâtiment, rend son jeton baluchon et récupère le jeton pouvoir associé au bâtiment. Un Vagabons peut refuser d'occuper une maison proposée par le Bailli.",
    permanentPower: true,
    max: 15,
  },

];

export const villageRolesSelects = [
  {
    idName: 'power-select',
    options: [
      {
        value: 'permanent',
        name: 'Pouvoir permanent',
      },
      {
        value: 'unique',
        name: 'Pouvoir unique',
      },
    ],
  },
  {
    idName: 'sorting-select',
    options: [
      {
        value: 'alphabetic',
        name: 'Ordre alphabétique',
      },
      {
        value: 'power',
        name: 'Pouvoirs',
      },
    ],
  },
];
