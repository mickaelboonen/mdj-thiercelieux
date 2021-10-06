import ange from 'src/assets/pictures/roles/ange.png';
import loupGarouBlanc from 'src/assets/pictures/roles/loup-garou-blanc.png';

// eslint-disable-next-line import/prefer-default-export
export const teamMembers = [
  {
    id: 1,
    isActive: true,
    name: 'Micka',
    picture: loupGarouBlanc,
    photo: '',
    description: "Ancien manager dans la restauration rapide, j'ai entrepris une reconversion professionnelle dans le dev avec quelques connaissances de css en poche. Tombé amoureux du développement pendant ma formation chez <a href=\"https://oclock.io/\"><span class=\"description-link\">O'Clock</span></a> et de JavaScript plus particulièrement, c'est sans hésitation que je me suis tourné vers la spécialité React. Je suis aussi un passionné de jeux de société, les univers Marvel et Harry Potter.",
    favoriteRole: 'Loup-Garou Blanc',
    role: 'Product Owner',
    site: '',
    linkedin: 'https://www.linkedin.com/in/mickael-boonen/',
  },
  {
    id: 2,
    isActive: false,
    name: 'Christal',
    picture: ange,
    photo: '',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam praesentium eligendi iste corrupti labore suscipit, quidem, nostrum aperiam minima aspernatur esse fuga nulla dolores ipsa illo harum ducimus quasi nesciunt vel cum? Voluptates illo alias perspiciatis possimus voluptatibus fuga sunt minima, cupiditate commodi explicabo, doloribus at placeat eligendi, temporibus nulla.',
    favoriteRole: 'Ange',
    role: '',
    site: '',
    linkedin: '',
  },
];
