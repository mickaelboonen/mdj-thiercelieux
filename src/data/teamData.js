import ange from 'src/assets/pictures/roles/ange.png';
import loupGarouBlanc from 'src/assets/pictures/roles/loup-garou-blanc.png';
import simpleVillageois from 'src/assets/pictures/roles/simple-villageois.png';

// eslint-disable-next-line import/prefer-default-export
export const teamMembers = [
  {
    isActive: true,
    name: 'Micka',
    icon: loupGarouBlanc,
    photo: '',
    description: "Ancien manager dans la restauration rapide, j'ai entrepris une reconversion professionnelle dans le dev avec quelques connaissances de css en poche. Tombé amoureux du développement pendant ma formation chez <a href=\"https://oclock.io/\"><span class=\"description-link\">O'Clock</span></a> et de JavaScript plus particulièrement, c'est sans hésitation que je me suis tourné vers la spécialité React. Je suis aussi un passionné de jeux de société, les univers Marvel et Harry Potter.",
    favoriteRole: 'Loup-Garou Blanc',
    role: 'Product Owner',
    site: '',
    linkedin: 'https://www.linkedin.com/in/mickael-boonen/',
  },
  {
    isActive: false,
    name: 'Christal',
    icon: ange,
    photo: '',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam praesentium eligendi iste corrupti labore suscipit, quidem, nostrum aperiam minima aspernatur esse fuga nulla dolores ipsa illo harum ducimus quasi nesciunt vel cum? Voluptates illo alias perspiciatis possimus voluptatibus fuga sunt minima, cupiditate commodi explicabo, doloribus at placeat eligendi, temporibus nulla.',
    favoriteRole: 'Ange',
    role: '',
    site: '',
    linkedin: '',
  },
  {
    isActive: false,
    name: 'Romain',
    icon: simpleVillageois,
    photo: '',
    description: " Ancien Barman dans la belle contrée de Lille je me suis reconverti dans le Developpement Web à l'issue d'une réfléxion sur ma vie future. Passioné de technologie web depuis toujours je ne pouvais décidement pas laisser cette belle opportunité d'appartenir à la grande famille O'Clock m'échapper. Je me suis naturellement dirigé vers le Dev Front parce que j'aime beaucoup faire du coloriage et des max-width: . Je suis un gamer invétéré et pouvoir allier Developpement Web et cette passion ont fait de ce projet un moment intense mais passionnant. UwU. ",
    favoriteRole: 'Simple Villageois',
    role: '',
    site: '',
    linkedin: '',
  },
];
