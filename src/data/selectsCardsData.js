export const newMoonCardsSelects = [
  {
    idName: 'phase-select',
    options: [
      {
        value: 'full-moon',
        name: 'Pleine Lune (immédiat)',
      },
      {
        value: 'warning-crescent',
        name: 'Premier Croissant (différé)',
      },
      {
        value: 'new-moon',
        name: 'Nouvelle Lune (permanent)',
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
        value: 'phase',
        name: 'Phase',
      },
    ],
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
