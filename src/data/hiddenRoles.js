/* eslint-disable max-len */

export const titles = [
  {
    id: 1,
    name: 'Capitaine',
    description: "Parce qu'ils sont très respectés, certains reçoivent une charge honorifique. Celle-ci leur donne une capacité particulière à manipuler avec circonspection. On ne naît pas Capitaine, on le devient... La médaille du Capitaine eest confiée à l'un des joueurs au cours de la partie, en plus de sa carte personnage. Le Capitaine est élu par vote, à la majorité relative. On ne peut refuser l'honneur d'être Capitaine. Dorénavant, les votes de ces joueurs comptent pour deux voix. Si ce jouer se fait éliminer, dans son dernier souffle il désigne son successeur.",
    expansion: 'Thiercelieux',
  },
  {
    id: 2,
    name: 'Garde Champêtre',
    description: '',
    expansion: 'Personnages',
  },
];

export const rolesSelects = [
  {
    idName: 'side-select',
    options: [
      {
        value: 'village',
        name: 'Les Villageois',
      },
      {
        value: 'werewolves',
        name: 'Les Loups-Garous',
      },
      {
        value: 'ambiguous',
        name: 'Les Ambigüs',
      },
      {
        value: 'solitary',
        name: 'Les Solitaires',
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
        value: 'side',
        name: 'Camp',
      },
    ],
  },
];

// import ancien from 'src/assets/pictures/roles/ancien.png';
// import ange from 'src/assets/pictures/roles/ange.png';
// import boucEmissaire from 'src/assets/pictures/roles/bouc-emissaire.png';
// import chasseur from 'src/assets/pictures/roles/chasseur.png';
// import chevalierEpee from 'src/assets/pictures/roles/chevalier-épée.png';
// import chienLoup from 'src/assets/pictures/roles/chien-loup.png';
// import corbeau from 'src/assets/pictures/roles/corbeau.png';
// import cupidon from 'src/assets/pictures/roles/cupidon.png';
// import enfantSauvage from 'src/assets/pictures/roles/enfant-sauvage.png';
// import frere from 'src/assets/pictures/roles/frere.png';
// import grandMechantLoup from 'src/assets/pictures/roles/grand-mechant-loup.png';
// import idiotDuVillage from 'src/assets/pictures/roles/idiot-du-village.png';
// import infectPereDesLoups from 'src/assets/pictures/roles/infect-pere-loup.png';
// import joueurDeFlute from 'src/assets/pictures/roles/joueur-flute.png';
// import jugeBegue from 'src/assets/pictures/roles/juge-begue.png';
// import loupGarouBlanc from 'src/assets/pictures/roles/loup-garou-blanc.png';
// import loupGarou from 'src/assets/pictures/roles/loup-garou.png';
// import montreurdOurs from 'src/assets/pictures/roles/montreur-ours.png';
// import petiteFille from 'src/assets/pictures/roles/petite-fille.png';
// import renard from 'src/assets/pictures/roles/renard.png';
// import salvateur from 'src/assets/pictures/roles/salvateur.png';
// import simpleVillageois from 'src/assets/pictures/roles/simple-villageois.png';
// import soeur from 'src/assets/pictures/roles/soeur.png';
// import sorciere from 'src/assets/pictures/roles/sorciere.png';
// import voleur from 'src/assets/pictures/roles/voleur.png';
// import voyante from 'src/assets/pictures/roles/voyante.png';

// export const hiddenRoles = [
//   {
//     id: 1,
//     name: 'Chasseur',
//     image: chasseur,
//     excerpt: "S'il se fait dévorer par les Loups-Garous ou éliminés palencrontreusement par les villageois, le Chasseur doit répliquer avant de rendre l'âme, en éliminant immédiatement n'importe quel autre joueur de son choix.",
//     description: "S'il se fait dévorer par les Loups-Garous ou éliminés palencrontreusement par les villageois, le Chasseur doit répliquer avant de rendre l'âme, en éliminant immédiatement n'importe quel autre joueur de son choix. Cas particulier: le Chasseur est l'Amoureux d'un joueur éliminé, avant de quitter la partie le Chasseur doit immédiatement éliminer un autre joueur de son choix. Cela peut entraîner une partie où il ne reste aucun survivant. Dans ce cas la victoire n'appartient à aucun des camps. ",
//     firstNight: false,
//     side: 'Village',
//     expansion: 'Thiercelieux',
//   },
//   {
//     id: 2,
//     name: 'Cupidon',
//     image: cupidon,
//     excerpt: "En décochant ses célèbres flèches magiques, Cupidon a le pouvoir de rendre deux personnes amoureuses à jamais. La première nuit, il désigne les deux joueurs.euses amoureux.ses. Cupidon peut, s'il le veut, se désigner comme l'un des deux Amoureux. S'il l'un des Amoureux est éliminé, l'autre meurt de chagrin immédiatement.",
//     description: "En décochant ses célèbres flèches magiques, Cupidon a le pouvoir de rendre deux personnes amoureuses à jamais. La première nuit, il désigne les deux joueurs.euses amoureux.ses. Cupidon peut, s'il le veut, se désigner comme l'un des deux Amoureux. S'il l'un des Amoureux est éliminé, l'autre meurt de chagrin immédiatement. Un Amoureux ne doit jamais éliminer son aimé, ni lui porter aucun préjudice (même pour faire semblant !). Attention: si l'un des amoureux est un Villageois et l'autre un Loup-Garou ou le Joueur de flûte, le but de la partie change pour les amoureux. En effet, afin de pouvoir vivre en paix leur amour et gagner la partie, ils doivent éliminer tous les autres joueurs, Loups-Garous et Villageois, en respectant les règles du jeu.",
//     firstNight: false,
//     side: 'Village',
//     expansion: 'Thiercelieux',
//   },
//   {
//     id: 3,
//     name: 'Loup-Garou',
//     image: loupGarou,
//     excerpt: 'Chaque nuit, ils dévorent un Villageois. Le jour, ils essaient de masquer leur identité nocturne pour échapper à la vindicte populaire.',
//     description: 'Chaque nuit, ils dévorent un Villageois. Le jour, ils essaient de masquer leur identité nocturne pour échapper à la vindicte populaire. Leur nombre peut varier suivant le nombre de joueurs et les variantes appliquées. En aucun cas un simple Loup-Garou ne peut dévorer un Loup-Garou.',
//     firstNight: false,
//     side: 'Loup-Garou',
//     expansion: 'Thiercelieux',
//   },
//   {
//     id: 4,
//     name: 'Petite Fille',
//     image: petiteFille,
//     excerpt: 'La Petite Fille peut, en entrouvrant les yeux, espionner les Loups-Garous pendant leur réveilµ. Si elle se fait surprendre par un des Loups Garous, elle pourra être dévorée immédiatement (en silence), à la place de la victime désignée.',
//     description: "La Petite Fille peut, en entrouvrant les yeux, espionner les Loups-Garous pendant leur réveilµ. Si elle se fait surprendre par un des Loups Garous, elle pourra être dévorée immédiatement (en silence), à la place de la victime désignée. La Petite Fille ne peut espionner que la nuit, durant le tour d'éveil des Loups-Garous. Elle n'a pas le droit de se faire passer pour une Loup-Garou et d'ouvrir grand les yeux.",
//     firstNight: false,
//     side: 'Village',
//     expansion: 'Thiercelieux',
//   },
//   {
//     id: 5,
//     name: 'Simple Villageois',
//     image: simpleVillageois,
//     excerpt: "Il n'a aucune compétence particulière. Ses seules armes sont la capacité d'analyse des comportements pour identifier les Loups-Garous, et la force de conviction pour empêcher l'éxécution de l'innocent qu'il est.",
//     description: "Il n'a aucune compétence particulière. Ses seules armes sont la capacité d'analyse des comportements pour identifier les Loups-Garous, et la force de conviction pour empêcher l'éxécution de l'innocent qu'il est.",
//     firstNight: false,
//     side: 'Village',
//     expansion: 'Thiercelieux',
//   },
//   {
//     id: 6,
//     name: 'Sorcière',
//     image: sorciere,
//     excerpt: "Elle sait concocter deux potions extrêmement puissantes : une potion de guérison, pour ressusciter le joueur dévoré par les Loups-Garous, une potion d'empoisonnement, utilisée la nuit pour éliminer un joueur.",
//     description: "Elle sait concocter deux potions extrêmement puissantes : une potion de guérison, pour ressusciter le joueur dévoré par les Loups-Garous, une potion d'empoisonnement, utilisée la nuit pour éliminer un joueur. La Sorcière doit utiliser chaque potion une seule fois dans la partie. Elle peut se servir de ses deux potions la même nuit. Le matin, suivant la ou les potions utilisées, il pourra y avoir deux joueurs éliminés ou aucun ! La Sorcière peut également utiliser la potion de guérison à son profit, et donc se guérir elle-même si elle vient d'être dévorée par les Loups-Garous.",
//     firstNight: false,
//     side: 'Village',
//     expansion: 'Thiercelieux',
//   },
//   {
//     id: 7,
//     name: 'Voleur',
//     image: voleur,
//     excerpt: 'Si on veut jouer le Voleur, il faut ajouter deux cartes Simples Villageois en plus de toutes celles déjà choisies. Après la distribution, les deux cartes non distribuées sont placées au centre de la table faces cachées.',
//     description: "Si on veut jouer le Voleur, il faut ajouter deux cartes Simples Villageois en plus de toutes celles déjà choisies. Après la distribution, les deux cartes non distribuées sont placées au centre de la table faces cachées. La première nuit, le Voleur pourra prendre connaissance de ces deux cartes, et échanger sa carte contre une des deux autres. Si ces cartes sont deux Loups-Garous, il est obligé d'échanger sa carte contre un des deux Loups-Garous. Il jouera désormais ce personnage jusqu'à la fin de la partie. ",
//     firstNight: false,
//     side: 'Ambigü',
//     expansion: 'Thiercelieux',
//   },
//   {
//     id: 8,
//     name: 'Voyante',
//     image: voyante,
//     excerpt: "Chaque nuit, elle voit la carte d'un joueur de son choix. Elle doit aider les autres Villageois, mais rester discrète pour ne pas être démasquée par les Loups-Garous.",
//     description: "Chaque nuit, elle voit la carte d'un joueur de son choix. Elle doit aider les autres Villageois, mais rester discrète pour ne pas être démasquée par les Loups-Garous.",
//     firstNight: false,
//     side: 'Village',
//     expansion: 'Thiercelieux',
//   },
//   {
//     id: 9,
//     name: 'Ancien',
//     image: ancien,
//     excerpt: "Il a victorieusement traversé toutes les terribles épreuves de la vie, et a acquis une résistance hors du commun ! Les Loups-Garous devront s'y prendre à deux fois pour le dévorer. La première fois que l'Ancien du Village est dévoré par les Loups-Garous il survit; le meneur du jeu ne retourne pas sa carte.",
//     description: "Il a victorieusement traversé toutes les terribles épreuves de la vie, et a acquis une résistance hors du commun ! Les Loups-Garous devront s'y prendre à deux fois pour le dévorer. La première fois que l'Ancien du Village est dévoré par les Loups-Garous il survit; le meneur du jeu ne retourne pas sa carte. L'Ancien est éliminé seulement la deuxième fois qu'il est dévoré. Le vote du village, la potion d'empoisonnement de la Sorcière, le tir du Chasseur et le rasoir du Barbier éliminent l'Ancien du premier coup. Mais désespérés d'avoir éliminé un tel puits de sciences, les Villageois perdent leurs pouvoirs spéciaux jusqu'à la fin de la partie. Il n'est pas affecté par l'Infect Père des Loups si c'est la première fois qu'il est mordu. Attention: si l'Ancien du village se fait soigner par la Sorcière, il récupère une seule vie. (Variante pour les courageux : si l'Idiot est déjà révélé, il sera éliminé avec l'Ancien car le village ayant perdu sa sagesse revient sur sa décision d'épargner l'Idiot.",
//     firstNight: false,
//     side: 'Village',
//     expansion: 'Nouvelle Lune',
//   },
//   {
//     id: 10,
//     name: 'Bouc Émissaire',
//     image: boucEmissaire,
//     excerpt: "C'est bien triste, mais à Thiercelieux, quand quelque chose ne va pas, c'est toujours lui qui en subit injustement les conséquences... Si le vote du village amène à égalité, c'est le Bouc Émissaire qui est éliminé à la place des ex aequo.",
//     description: "C'est bien triste, mais à Thiercelieux, quand quelque chose ne va pas, c'est toujours lui qui en subit injustement les conséquences... Si le vote du village amène à égalité, c'est le Bouc Émissaire qui est éliminé à la place des ex aequo. A lui de bien manoeuvrer pour éviter cette triste conclusion. Si le Bouc émissaire est éliminé, il lui reste une prérogative à exercer. Il désigne qui votera ou ne votera pas durant la prochaine journée. Attention : désigner un seul joueur pour voter, c'est risquer de le faire dévorer par les Loups-Garous la nuit suivante. Il n'y aurait alors pas de vote du Village. (Sauf bien entendu, si le joueur désigné est un Loup-Garou, ou que les Loups-Garous fassent exprès de ne pas l'éliminer...)",
//     firstNight: false,
//     side: 'Village',
//     expansion: 'Nouvelle Lune',
//   },
//   {
//     id: 11,
//     name: 'Idiot du Village',
//     image: idiotDuVillage,
//     excerpt: "Quel village n'a pas son idiot ? Il fait un peu n'importe quoi, mais il est tellement attachant que personne ne lui voudrait de mal... Si le village vote contre lui, l'Idiot du village retourne sa carte. A cet instant les Villageois comprennent leur erreur et ils le gracient immédiatement.",
//     description: "Quel village n'a pas son idiot ? Il fait un peu n'importe quoi, mais il est tellement attachant que personne ne lui voudrait de mal... Si le village vote contre lui, l'Idiot du village retourne sa carte. A cet instant les Villageois comprennent leur erreur et ils le gracient immédiatement. Dorénavant il continue de jouer, mais il a perdu son droit de vote. Que vaudrait le vote d'un idiot... Il n'y aura pas de nouveau vote à ce tour. Attention: si les Loups-Garous le dévorent, l'Idiot du village est éliminé. S'il est éliminé alors qu'il était le Capitaine du village, il ne transmet pas sa fonction, il n'y aura donc plus de Capitaine. Si le Chasseur tire sur l'Idiot, ce dernier est éliminé. ",
//     firstNight: false,
//     side: 'Village',
//     expansion: 'Nouvelle Lune',
//   },
//   {
//     id: 12,
//     name: 'Joueur de Flute',
//     image: joueurDeFlute,
//     excerpt: "Ignominieusement chassé du village, il est revenu des années plus tard sous le couvert d'une fausse identité pour exercer sa terrible vengeance. Chaque nuit, à l'appel du meneur de jeu, le Joueur de flûte charme deux nouveaux joueurs.  Dès l'instant où il ne reste plus que des joueurs charmés, le Joueur de flûte a gagné contre tous les autres.",
//     description: "Ignominieusement chassé du village, il est revenu des années plus tard sous le couvert d'une fausse identité pour exercer sa terrible vengeance. Chaque nuit, à l'appel du meneur de jeu, le Joueur de flûte charme deux nouveaux joueurs.  Dès l'instant où il ne reste plus que des joueurs charmés, le Joueur de flûte a gagné contre tous les autres. (Même si cela arrive suite à un vote du Village ou grâce aux Loups-Garous). S'il est infecté par l'Infect Père des Loups, il devient un simple Loup-Garou. Son objectif initial, qui était de vouloir charmer tous les joueurs, est donc abandonné. Il va collaborer avec les Loups-Garous pour leur victoire commune.  Attention : le Joueur de flûte ne peut s'auto-charmer.  Le Salvateur ne protège pas du charme. La Sorcière ne guérit pas du charme. Les Loups-Garous ne sont pas immunisés contre le charme. Les joueurs charmés conservent tous leurs pouvoirs et caractéristiques. Le charme se ne transmet pas entre Amoureux.",
//     firstNight: false,
//     side: 'Solitaire',
//     expansion: 'Nouvelle Lune',
//   },
//   {
//     id: 13,
//     name: 'Salvateur',
//     image: salvateur,
//     excerpt: 'Ce personnage peut préserver les Villageois de la morsure des Loups-Garous... Chaque nuit, le Salvateur est appelé avant les Loups-Garous. Le Salvateur désigne alors un joueur qui sera protégé la nuit durant (et celle-ci seulement) contre les Loups-Garous.',
//     description: "Ce personnage peut préserver les Villageois de la morsure des Loups-Garous... Chaque nuit, le Salvateur est appelé avant les Loups-Garous. Le Salvateur désigne alors un joueur au meneur du jeu. (Il est de tradition que le Salvateur reproduise d'abord avec sa main la figure dessinée sur la carte). Le joueur ainsi désigné sera protégé la nuit durant (et celle-ci seulement) contre les Loups-Garous. Même désigné par eux il ne sera pas éliminé du jeu. Attention : Le Salvateur a le droit de s'auto-protéger. Il n'a pas le droit de protéger deux nuits de suite le même joueur. La protection du Salvateur ne donne aucun résultat sur la Petite Fille. (Elle est en pleine crise de préadolescence et rien ne saurait lui éviter d'avoir des ennuis). Le Salvateur ne protège ni du Joueur de flûte ni de l'infection par l'Infect Père des Loups.",
//     firstNight: false,
//     side: 'Village',
//     expansion: 'Nouvelle Lune',
//   },
//   {
//     id: 14,
//     name: '2 Soeurs',
//     image: soeur,
//     excerpt: "Certains locaterciens les confondent quand ils croisent une des Deux Sœurs au détour d'un chemin creux. Le sourire qui s'affiche sur le visage de la jeune fille après qu'on a tenté sa chance au jeu du prénom est difficile a interpréter : la jeune nubile est-elle heureuse d'avoir été identifiée ou s'amuse-t-elle de la méprise ? En tout cas, les Deux Sœurs s'entendent comme les doigts de la main ou les cheveux d'une même mèche.",
//     description: "Certains locaterciens les confondent quand ils croisent une des Deux Sœurs au détour d'un chemin creux. Le sourire qui s'affiche sur le visage de la jeune fille après qu'on a tenté sa chance au jeu du prénom est difficile a interpréter : la jeune nubile est-elle heureuse d'avoir été identifiée ou s'amuse-t-elle de la méprise ? En tout cas, les Deux Sœurs s'entendent comme les doigts de la main ou les cheveux d'une même mèche. C'est certes encourageant d'avoir un proche sur qui compter dans ces moments incertains ! La première nuit, à l'appel du meneur, elles se réveillent ensemble et se reconnaissent. Pour les joueurs expérimentés : au cours de la partie, de temps en temps (un tour sur deux ou au gré du meneur), elles se réveillent à nouveau et se concertent rapidement et en silence sur les décisions à prendre pour sauver le village. Conseil au meneur : particulièrement puissant avec des pratiquants de la langue des signes. ",
//     firstNight: false,
//     side: 'Village',
//     expansion: 'Personnages',
//   },
//   {
//     id: 15,
//     name: '3 Frères',
//     image: frere,
//     excerpt: "Tout le village résonne de leurs joyeux éclats verbaux quand ils regagnent la maison après le travail des champs. Pendant les débats, un simple coup d’œil entre eux leur permet de prendre une bonne décision quant à l'avenir du village.",
//     description: "Tout le village résonne de leurs joyeux éclats verbaux quand ils regagnent la maison après le travail des champs. Pendant les débats, un simple coup d’œil entre eux leur permet de prendre une bonne décision quant à l'avenir du village. La première nuit, à l'appel du meneur, ils se réveillent ensemble et se reconnaissent. Pour les joueurs expérimentés : au cours de la partie, de temps en temps (un tour sur deux ou au gré du meneur), ils se réveillent à nouveau et se concertent rapidement et en silence sur les décisions à prendre pour sauver le village. Conseil au meneur : encore plus puissant avec des pratiquants de la langue des signes. A n'utiliser que dans les grands villages. Si le village est très grand, vous pouvez même y associer les Deux Sœurs. ",
//     firstNight: false,
//     side: 'Village',
//     expansion: 'Personnages',
//   },
//   {
//     id: 16,
//     name: 'Abominable Sectaire',
//     image: "",
//     excerpt: "Son but : réaliser son propre objectif, indépendamment de son camp. Depuis son enfance, et peut-être à cause d'un manque d'amour ou d'intérêt prodigué par ses proches, ce pauvre hère ne s'aimait pas du tout. En grandissant, il a transféré cette haine sur tous ceux qui lui sont étrangers. C'est pourquoi on le désigne aujourd'hui sous le triste nom d'Abominable Sectaire.",
//     description: "Son but : réaliser son propre objectif, indépendamment de son camp. Depuis son enfance, et peut-être à cause d'un manque d'amour ou d'intérêt prodigué par ses proches, ce pauvre hère ne s'aimait pas du tout. En grandissant, il a transféré cette haine sur tous ceux qui lui sont étrangers. C'est pourquoi on le désigne aujourd'hui sous le triste nom d'Abominable Sectaire. Avant le début de la partie, le meneur divise le village en deux groupes, selon un critère évident (sexe, lunettes, taille, âge, etc.) et l'annonce à voix haute au village.  L'Abominable Sectaire fera fatalement partie de l'un ou de l'autre des deux groupes. Le but de ce personnage est l'élimination de tous les joueurs du groupe qu'il déteste, c'est-à-dire celui auquel il n'appartient pas. Dans ce cas-là, et seulement dans ce cas, il gagne la partie. Il n'a pas de pouvoir particulier : son habileté à manipuler les habitants du village est sa seule arme ! S'il est infecté par l'Infect Père des Loups, il devient Loup-Garou. Conseil au meneur : il n'est pas obligatoire de constituer deux groupes de tailles identiques . N'hésitez pas si nécessaire à préciser devant tout le monde à quel groupe appartient chaque habitant. ",
//     firstNight: false,
//     side: 'Solitaire',
//     expansion: 'Personnages',
//   },
//   {
//     id: 17,
//     name: 'Ange',
//     image: ange,
//     excerpt: "La vie fangeuse d'un village infesté de créatures malfaisantes le dégoûte ; il souhaite être victime du pire cauchemar, pour se réveiller enfin paisible dans son lit douillet.",
//     description: "La vie fangeuse d'un village infesté de créatures malfaisantes le dégoûte ; il souhaite être victime du pire cauchemar, pour se réveiller enfin paisible dans son lit douillet. Quand l'Ange est en jeu, la partie débute toujours par le débat du village suivi d'un vote éliminatoire, puis d'une première nuit. Si l'Ange réussit à attirer le vote discriminatoire des villageois ou la vindicte dévorante des lycanthropes pour être éliminé au premier tour, il pourra sortir vainqueur du cauchemar et gagner la partie. Alors le jeu s'arrête : les joueurs peuvent commencer immédiatement une nouvelle partie. S'il échoue, il deviendra Simple Villageois pour la suite de la partie. Conseil au meneur: n'hésitez pas à rappeler l'éventuelle présence de l'Ange lors de la première journée ! Les débats seront plus animés, les beaux parleurs étant protégés par cette angélique menace !",
//     firstNight: false,
//     side: 'Solitaire',
//     expansion: 'Personnages',
//   },
//   {
//     id: 18,
//     name: "Chevalier à l'Épée Rouillée",
//     image: chevalierEpee,
//     excerpt: "'Don Quitousse' est un très vieux chevalier à la retraite. Il est assez épuisé par une vie de quêtes à travers le monde et n'entretient plus très bien son noble outil. La rouille s'est peu à peu déposée sur le tranchant émoussé de sa fidèle protectrice mais jamais il ne la quittera pour une autre. Il dort encore tous les soirs avec elle ces temps-ci : gare aux importuns !",
//     description: "'Don Quitousse' est un très vieux chevalier à la retraite. Il est assez épuisé par une vie de quêtes à travers le monde et n'entretient plus très bien son noble outil. La rouille s'est peu à peu déposée sur le tranchant émoussé de sa fidèle protectrice mais jamais il ne la quittera pour une autre. Il dort encore tous les soirs avec elle ces temps-ci : gare aux importuns ! Si le Chevalier est dévoré, il est éliminé, mais un des Loups-Garous est contaminé par l'épée rouillée. Parmi les Loups-Garous coupables de cette élimination, le premier Loup-Garou situé à gauche du Chevalier à l'Épée Rouillée sera éliminé la nuit suivante. Cette élimination due à la maladie sera révélée par le meneur le matin après la disparition du Loup-Garou. Celui-ci aura donc survécu à sa blessure durant une journée. Attention : les joueurs pourront en déduire que les tous les habitants entre le défunt Chevalier à l'Épée Rouillée et le Loup-Garou malade sont d'innocents villageois. ",
//     firstNight: false,
//     side: 'Village',
//     expansion: 'Personnages',
//   },
//   {
//     id: 19,
//     name: 'Chien-Loup',
//     image: chienLoup,
//     excerpt: "Tous les chiens savent au tréfonds d'eux-mêmes que leurs ancêtres étaient loups et ce qu'est l'Homme qui les a maintenus dans cet état de compagnons enfantins et craintifs, mais fidèles et généreux. En tout cas, seul le Chien-Loups peut décider s'il obéira à son maître humain et civilisé ou s'il écoutera l'appel de la nature sauvage enfouie dans ses entrailles.",
//     description: "Tous les chiens savent au tréfonds d'eux-mêmes que leurs ancêtres étaient loups et ce qu'est l'Homme qui les a maintenus dans cet état de compagnons enfantins et craintifs, mais fidèles et généreux. En tout cas, seul le Chien-Loups peut décider s'il obéira à son maître humain et civilisé ou s'il écoutera l'appel de la nature sauvage enfouie dans ses entrailles. La première nuit, il choisit s'il désire être Simple Villageois ou Loup-Garou. S'il désire être Loup-Garou, il se réveillera avec eux toutes les nuits et participera désormais à la désignation de la victime dévorée. Sinon, il garde les yeux clos et gagnera avec les villageois. Ce choix est définitif !  Conseil au meneur : ne pas révéler la véritable nature du Chien-Loup éliminé par  le vote du village peut être amusant. Le doute à propos de sa véritable identité subsiste alors : était il villageois ou Loup-Garou avant d'être éliminé ?",
//     firstNight: false,
//     side: 'Ambigü',
//     expansion: '',
//   },
//   {
//     id: 20,
//     name: 'Comédien',
//     image: "",
//     excerpt: "",
//     description: '',
//     firstNight: false,
//     side: 'Ambigü',
//     expansion: 'Personnages',
//   },
//   {
//     id: 21,
//     name: 'Enfant Sauvage',
//     image: enfantSauvage,
//     excerpt: "Abandonné dans la forêt par ses parents dans sa plus tendre enfance, il y fut élevé par des loups. Dès qu'il sut marcher à quatre pattes, l'Enfant Sauvage se mit à errer aux abords de Thiercelieux. Un beau jour, fasciné par un habitant du village qui marchait debout avec grâce et prestance, il en fit son modèle en secret. Il décida alors d'intégrer la communauté de Thiercelieux et pénétra, inquiet, dans le village.",
//     description: "Abandonné dans la forêt par ses parents dans sa plus tendre enfance, il y fut élevé par des loups. Dès qu'il sut marcher à quatre pattes, l'Enfant Sauvage se mit à errer aux abords de Thiercelieux. Un beau jour, fasciné par un habitant du village qui marchait debout avec grâce et prestance, il en fit son modèle en secret. Il décida alors d'intégrer la communauté de Thiercelieux et pénétra, inquiet, dans le village. La communauté fut émue par sa fragilité, l'adopta et l'accueillit en son sein. Que deviendra-t-il : honnête Villageois ou terrible Loup-Garou ? Toute son existence, le cœur de l'Enfant Sauvage balancera entre ces deux alternatives. Puisse son modèle le confirmer dans son humanité nouvelle. L'Enfant Sauvage est un villageois. La première nuit, à l'appel du meneur, il désigne un joueur modèle. Si durant la partie le joueur désigné est éliminé, l'Enfant Sauvage devient Loup-Garou et se réveillera la nuit suivante avec ses congénères, dévorera avec eux toutes les nuits jusqu’à la la fin de sa partie. En revanche, tant que son modèle est vivant, l'Enfant Sauvage demeure un villageois. Que son modèle s'avère ou non être un Loup-Garou ne change rien à l'affaire. Rien n'empêche l'Enfant Sauvage de participer à l'élimination de son modèle s'il le désire. Si son modèle est vivant lorsque tous les Loups-Garous sont éliminés, il a gagné avec les villageois. Si son modèle est éliminé et que seuls des Loups-Garous survivent avec lui, c'est aussi une victoire pour notre Enfant Sauvage. Conseil au meneur : ne pas révéler la véritable nature de l'Enfant Sauvage éliminé par  le vote du village peut être amusant. Le doute à propos de sa véritable identité subsiste alors : était il villageois ou Loup-Garou avant d'être éliminé ? ",
//     firstNight: false,
//     side: 'Ambigü',
//     expansion: 'Personnages',
//   },
//   {
//     id: 22,
//     name: 'La Gitane (sans Philtre)',
//     image: "",
//     excerpt: "La sœur d’Esméralda, qu'on nommait tout simplement la Gitane, connaissait les Voies de l'Au-Delà. Il lui suffisait sans aucun artifice ni onguent de se concentrer et de contempler le ciel à la nouvelle lune pour communiquer avec l'âme des disparus.",
//     description: "La sœur d’Esméralda, qu'on nommait tout simplement la Gitane, connaissait les Voies de l'Au-Delà. Il lui suffisait sans aucun artifice ni onguent de se concentrer et de contempler le ciel à la nouvelle lune pour communiquer avec l'âme des disparus. Au début du jeu, le meneur prend les cinq cartes Spiritisme de 'Nouvelle Lune' et les garde en main. Chaque nuit, le meneur appelle la Gitane et lui demande si elle désire utiliser son pouvoir. Dans l'affirmative, le meneur lit à haute voix les quatre questions d'une carte spiritisme de son choix. La Gitane (sans Philtre) valide une des questions par geste. Puis, elle désigne au meneur l'habitant qui devra poser cette question. Le matin suivant, le joueur désigné devient spirite et pose cette question à voix haute. Avec une forte voix sépulcrale, le premier joueur éliminé répond à cette question par 'Ouiiiii' ou 'Nooooon'. La carte est ensuite défaussée.",
//     firstNight: false,
//     side: 'Village',
//     expansion: 'Personnages',
//   },
//   {
//     id: 23,
//     name: 'Grand Méchant Loup',
//     image: grandMechantLoup,
//     excerpt: 'A Thiercelieux, les petits cochons ne sont pas les seuls à redouter le Grand-Méchant-Loup. Il est énorme est son appétit est gigantesque. A cause de lui, des villages entiers furent rayés de la carte !',
//     description: "A Thiercelieux, les petits cochons ne sont pas les seuls à redouter le Grand-Méchant-Loup. Il est énorme est son appétit est gigantesque. A cause de lui, des villages entiers furent rayés de la carte ! Chaque nuit, il se réveille et dévore avec les autres Loups-Garous. Mais tant qu'aucun Loup-Garou, Enfant Sauvage ou Chien-Loup n'est éliminé, il se réveille seul une deuxième fois et dévore une autre victime. Il ne peut pas dévorer de Loup-Garou.",
//     firstNight: false,
//     side: 'Loup-Garou',
//     expansion: 'Personnages',
//   },
//   {
//     id: 24,
//     name: 'Infect Père des Loups',
//     image: infectPereDesLoups,
//     excerpt: "Le tout premier Loup-Garou de nos contrées, le père de tous leurs pères, avait deux pouvoirs : le premier était de propager son engeance par une morsure spéciale et le second de fuir ce monde en s'endormant pour quelques siècles. Heureusement pour nos ancêtres récents, il s'était depuis longtemps assoupi. Les auteurs de cet ouvrage souhaitent bon courage aux villageois d'auhjourd'hui et signalent que l'Infect Père des Loups vient juste de se réveiller d'un long sommeil, et qu'il a très faim !",
//     description: "Le tout premier Loup-Garou de nos contrées, le père de tous leurs pères, avait deux pouvoirs : le premier était de propager son engeance par une morsure spéciale et le second de fuir ce monde en s'endormant pour quelques siècles. Heureusement pour nos ancêtres récents, il s'était depuis longtemps assoupi. Les auteurs de cet ouvrage souhaitent bon courage aux villageois d'auhjourd'hui et signalent que l'Infect Père des Loups vient juste de se réveiller d'un long sommeil, et qu'il a très faim ! Chaque nuit, il se réveille et dévore avec les autres Loups-Garous. Mais une fois dans la partie, s'il le désire, après que les Loups-Garous se sont endormis, il lève la main. Cela signifie que la victime n'est pas dévorée mais infectée. L'Infect Père des Loups ne peut utiliser son pouvoir spécial qu'une seule fois dans la partie. Le meneur touche alors cet habitant infecté qui devient immédiatement (et secrètement) Loup-Garou, il participera désormais toutes les nuits au festin des Loups-Garous. S'il possédait un pouvoir nocturne, il sera réveillé par le meneur les tours suivants pour utiliser ce pouvoir, en plus d'être appelé avec les Loups-Garous.",
//     firstNight: false,
//     side: 'Loup-Garou',
//     expansion: 'Personnages',
//   },
//   {
//     id: 25,
//     name: 'Juge Bègue',
//     image: jugeBegue,
//     excerpt: "Le plus jeune fils du meunier était doué pour les études et rêvait d'être avocat. Comme son père avait bien réussi à rouler ses clients dans la farine, il l'envoya faire son droit dans la grande cité voisine. Un léger défaut de prononciation interdit au jeune homme le prestige tant convoité d'être un défenseur de la veuve et de l’orphelin.",
//     description: "Le plus jeune fils du meunier était doué pour les études et rêvait d'être avocat. Comme son père avait bien réussi à rouler ses clients dans la farine, il l'envoya faire son droit dans la grande cité voisine. Un léger défaut de prononciation interdit au jeune homme le prestige tant convoité d'être un défenseur de la veuve et de l’orphelin. Toutefois, il regagna le village de Thiercelieux auréolé du titre de juge itinérant. Une fois dans la partie, le Juge Bègue peut décider qu'il y aura deux votes consécutifs et deux éliminations, de suspect. Le Juge Bègue signifie au meneur sa décision par un signe particulier qu'il utilise pour désigner un habitant durant un vote du village. Le deuxième vote est aussitôt déclenché sans débat par le meneur, juste après l'élimination due au premier vote. Le 'Ju-juge Bè-bègue' aura montré ce signe particulier durant la première nuit, à l'appel du meneur. Conseil au meneur : soyez toujours très attentif au comportement du Juge Bègue durant les votes, afin de ne pas manquer son signe particulier. ",
//     firstNight: false,
//     side: 'Village',
//     expansion: 'Personnages',
//   },
//   {
//     id: 26,
//     name: "Montreur d'Ours",
//     image: montreurdOurs,
//     excerpt: "Ah ! Qu'il est doux à ma mémoire, ce bruit de chaîne qui ruisselle en glissant sur les pavés de 'la place des Trois Routes', accompagné par le grognement d'Ursus. Ah ! Qu'il est loin ce temps où Titan, le Montreur d'Ours, dirigeait avec maestria son compagnon dans un ballet si gracieux qu'on en pleurait chaque été à Thiercelieux. Ursus avait en outre ce pouvoir si précieux, de détecter les lycanthropes cachés près de lui.",
//     description: "Ah ! Qu'il est doux à ma mémoire, ce bruit de chaîne qui ruisselle en glissant sur les pavés de 'la place des Trois Routes', accompagné par le grognement d'Ursus. Ah ! Qu'il est loin ce temps où Titan, le Montreur d'Ours, dirigeait avec maestria son compagnon dans un ballet si gracieux qu'on en pleurait chaque été à Thiercelieux. Ursus avait en outre ce pouvoir si précieux, de détecter les lycanthropes cachés près de lui. Chaque matin, juste après la révélation des éventuelles victimes nocturnes, si au moins un Loup-Garou est ou devient directement le voisin du Montreur d'Ours, alors le meneur grogne pour signifier aux joueurs que l'ours du Montreur a senti le danger. Seuls les voisins toujours en jeu sont pris en compte. Conseil au meneur : pour faciliter les choses, les joueurs éliminés sortent de la partie ou s'écartent de la table. Si le Montreur d'Ours est infecté, alors le meneur grognera tous les jours tant que le Montreur d'Ours n'est pas éliminé.",
//     firstNight: false,
//     side: 'Village',
//     expansion: 'Personnages',
//   },
//   {
//     id: 27,
//     name: 'Renard',
//     image: renard,
//     excerpt: 'A Thiercelieux, tout le monde apprécie le flair de ce personnage vif et discret, sauf peut-être les poules et surtout les Loups-Garous.',
//     description: "A Thiercelieux, tout le monde apprécie le flair de ce personnage vif et discret, sauf peut-être les poules et surtout les Loups-Garous. La nuit, à l'appel du meneur, le Renard peut désigner un groupe de trois joueurs voisins, dont il montre du doigt le joueur central. Si dans ce groupe se trouve au moins un Loup-Garou, alors le meneur fait un signe affirmatif au Renard. Dans ce cas, le Renard pourra utiliser à nouveau son pouvoir une nuit suivante. Si aucun Loup-Garou ne fait partie du groupe désigné, le Renard perd définitivement son pouvoir ; par contre, il bénéficie d'une information de taille innocentant trois joueurs d'un coup. Remarque : le meneur appelle le Renard toutes les nuits, mais celui-ci n'est en aucune mesure tenu d'utiliser son pouvoir chaque nuit. Conseil au meneur : le Renard ne voit pas les cartes; le meneur lui indique simplement sil y a ou s'il n'y a pas de Loup-Garou parmi ces trois joueurs. ",
//     firstNight: false,
//     side: 'Village',
//     expansion: 'Personnages',
//   },
//   {
//     id: 28,
//     name: 'Servante Dévouée',
//     image: "",
//     excerpt: "",
//     description: '',
//     firstNight: false,
//     side: 'Ambigü',
//     expansion: 'Personnages',
//   },
//   {
//     id: 29,
//     name: 'Villageois Villageois',
//     image: simpleVillageois,
//     excerpt: "Ce personnage possède une âme claire et transparente comme l'eau d'un ruisseau montagnard. Il méritera l'écoute attentive de ses pairs et rendra sa parole décisive dans les moments cruciaux. Quel pouvoir peut être aussi grand que d'inspirer aux honnêtes gens une confiance absolue ?",
//     description: "Ce personnage possède une âme claire et transparente comme l'eau d'un ruisseau montagnard. Il méritera l'écoute attentive de ses pairs et rendra sa parole décisive dans les moments cruciaux. Quel pouvoir peut être aussi grand que d'inspirer aux honnêtes gens une confiance absolue ? Les Loups-Garous se rueront-ils pour éliminer cet être sans pouvoir secret ? Préféreront-ils débusquer des villageois aux pouvoirs plus menaçants ? Sur ses deux faces, cette carte possède l'illustration de Simple Villageois. A la distribution, le village aura donc la certitude aboslue que son propriétaire est bel et bien un innocent Simple Villageois. Conseil au meneur : ce personnage peut devenir un Capitaine ou un Garde Champêtre de confiance.",
//     firstNight: false,
//     side: 'Village',
//     expansion: 'Personnages',
//   },
//   {
//     id: 30,
//     name: 'Corbeau',
//     image: corbeau,
//     excerpt: "Cet individu adore faire connaître secrètement ses suspicions de culpabilité, en collant juste avant l'aube, une affiche anonyme pleine de perfides accusations envers le joueur concerné. Son impact est certain malgré le manque de courage de notre oiseau !",
//     description: "Cet individu adore faire connaître secrètement ses suspicions de culpabilité, en collant juste avant l'aube, une affiche anonyme pleine de perfides accusations envers le joueur concerné. Son impact est certain malgré le manque de courage de notre oiseau ! Chaque fin de nuit, après que les Loups-Garous se sont rendormis, à l'appel de son rôle le Corbeau peut désigner un joueur qu'il suspecte. Le meneur dépose alors que le marqueur 'anonyme' devant le bâtiment du joueur désigné. Ce joueur aura automatiquement deux voix de plus contre lui au prochain décompte des votes. Le Corbeau peut déposer 'l'affiche anonyme' sur la taverne, même si le Tavernier n'a pas encore participé par son vote à une élimination. Le Corbeau ne peut désigner aucun Vagabond.",
//     firstNight: false,
//     side: 'Village',
//     expansion: 'Le Village',
//   },
//   {
//     id: 31,
//     name: 'Loup Garou Blanc',
//     image: loupGarouBlanc,
//     excerpt: "Ce très malfaisant personnage déteste autant les Loups-Garous que les villageois ! Dans un ouvrage récent, intitulé 'Le Village', on raconte qu'une étrange mutation serait survenue au sein même de la population lycanthropique.",
//     description: "Ce très malfaisant personnage déteste autant les Loups-Garous que les villageois ! Dans un ouvrage récent, intitulé 'Le Village', on raconte qu'une étrange mutation serait survenue au sein même de la population lycanthropique. Chaque nuit, il se réveille et dévore avec les autres Loups-Garous. Mais une nuit sur deux, à l'appel du meneur, il se réveille seul et peut éliminer un Loup-Garou. Le but de ce personnage et de rester le seul survivant du village. Dans ce cas-là seulement il gagne la partie.",
//     firstNight: false,
//     side: 'Solitaire',
//     expansion: 'Le Village',
//   },
//   {
//     id: 32,
//     name: 'Pyromane',
//     image: "",
//     excerpt: "Comme son nom l'indique, ce personnage est affublé d'un énorme défaut. Espérons qu'il pourra maîtriser son vice incendiaire et s'occuper de la bonne maison, au bon moment, afin de rendre service au village menacé !",
//     description: "Comme son nom l'indique, ce personnage est affublé d'un énorme défaut. Espérons qu'il pourra maîtriser son vice incendiaire et s'occuper de la bonne maison, au bon moment, afin de rendre service au village menacé ! A l'appel de son rôle, le Pyromane peut, seule fois dans la aprtie, désigner un bâtiment sur lequel le meneur de jeu dépose la tuile 'feu'. Au matin suivant, après que tous les habitants ont constaté le sinistre, le bâtiment est définitivement retiré de la table. Son ex-occupant n'est pas éliminé du jeu, il devient un Vagabond. Si le Pyromane a désigné le bâtiment où habite la victime du jour des Loups-Garous, le premier Loup-Garou à droite de la victime est éliminé, complètement carbonisé. Affolés par les flammes, les éventuels Loups-Garous survivants n'ont pas le temps de apsser à table ! Dans ce cas-là il n'y a pas de victime. Attention : il est nécessaire de jours avec les bâtiments pour utiliser ce personnage.",
//     firstNight: false,
//     side: 'Village',
//     expansion: 'Le Village',
//   },
// ];
