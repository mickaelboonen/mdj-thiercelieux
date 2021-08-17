/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable max-len */
/* eslint-disable no-else-return */
export const sortBy = (order, array) => {
  let newArray = [];
  const rolesNames = array.map((role) => role.name).sort();

  if (order === 'alphabetic') {
    newArray = rolesNames.map((name) => {
      const role = array.find((villager) => villager.name === name);
      return role;
    });
    return newArray;
  }
  else if (order === 'power') {
    const permanentArray = array.filter((role) => role.permanentPower);
    const uniqueArray = array.filter((role) => !role.permanentPower);

    const sortedPermanentArray = rolesNames.map((name) => {
      const role = permanentArray.find((villager) => villager.name === name);
      return role;
    });
    const sortedUniqueArray = rolesNames.map((name) => {
      const role = uniqueArray.find((villager) => villager.name === name);
      return role;
    });
    const firstArray = sortedPermanentArray.filter((currentRole) => currentRole !== undefined);
    const secondArray = sortedUniqueArray.filter((currentRole) => currentRole !== undefined);

    newArray = firstArray.concat(secondArray);
  }
  else if (order === 'side') {
    const villageArray = array.filter((role) => role.side === 'Village');
    const werewolvesArray = array.filter((role) => role.side === 'Loup-Garou');
    const ambiguousArray = array.filter((role) => role.side === 'Ambigü');
    const solitaryArray = array.filter((role) => role.side === 'Solitaire');

    const sortedVillageArray = rolesNames.map((name) => {
      const role = villageArray.find((hiddenRole) => hiddenRole.name === name);
      return role;
    });

    const sortedWerewolvesArray = rolesNames.map((name) => {
      const role = werewolvesArray.find((hiddenRole) => hiddenRole.name === name);
      return role;
    });

    const sortedAmbiguousArray = rolesNames.map((name) => {
      const role = ambiguousArray.find((hiddenRole) => hiddenRole.name === name);
      return role;
    });

    const sortedSolitaryArray = rolesNames.map((name) => {
      const role = solitaryArray.find((hiddenRole) => hiddenRole.name === name);
      return role;
    });
    const firstArray = sortedVillageArray.filter((currentRole) => currentRole !== undefined);
    const secondArray = sortedWerewolvesArray.filter((currentRole) => currentRole !== undefined);
    const thirdArray = sortedAmbiguousArray.filter((currentRole) => currentRole !== undefined);
    const fourthArray = sortedSolitaryArray.filter((currentRole) => currentRole !== undefined);

    newArray = [
      ...firstArray,
      ...secondArray,
      ...thirdArray,
      ...fourthArray,
    ];
  }
  else if (order === 'phase') {
    const fullMoonArray = array.filter((card) => card.phase === 'Pleine Lune');
    const warningCrescentArray = array.filter((card) => card.phase === 'Croissant');
    const newMoonArray = array.filter((card) => card.phase === 'Nouvelle Lune');

    const sortedFullMoonArray = rolesNames.map((name) => {
      const role = fullMoonArray.find((hiddenRole) => hiddenRole.name === name);
      return role;
    });

    const sortedWarningCrescentArray = rolesNames.map((name) => {
      const role = warningCrescentArray.find((hiddenRole) => hiddenRole.name === name);
      return role;
    });

    const sortedNewMoonArray = rolesNames.map((name) => {
      const role = newMoonArray.find((hiddenRole) => hiddenRole.name === name);
      return role;
    });

    const firstArray = sortedFullMoonArray.filter((currentRole) => currentRole !== undefined);
    const secondArray = sortedWarningCrescentArray.filter((currentRole) => currentRole !== undefined);
    const thirdArray = sortedNewMoonArray.filter((currentRole) => currentRole !== undefined);

    newArray = [
      ...firstArray,
      ...secondArray,
      ...thirdArray,
    ];
  }
  return newArray;
};

export const filterByPower = (order, array) => {
  const newArray = array.filter((role) => {
    if (order === 'permanent' && role.permanentPower) {
      return role;
    }
    else if (order === 'unique' && !role.permanentPower) {
      return role;
    }
  });
  return newArray;
};

export const filterBySide = (order, array) => {
  const newArray = array.filter((role) => {
    if (order === 'village' && role.side === 'Village') {
      return role;
    }
    else if (order === 'werewolves' && role.side === 'Loup-Garou') {
      return role;
    }
    else if (order === 'ambiguous' && role.side === 'Ambigü') {
      return role;
    }
    else if (order === 'solitary' && role.side === 'Solitaire') {
      return role;
    }
  });
  return newArray;
};

export const filterByPhase = (order, array) => {
  const newArray = array.filter((card) => {
    if (order === 'full-moon' && card.phase === 'Pleine Lune') {
      return card;
    }
    else if (order === 'warning-crescent' && card.phase === 'Croissant') {
      return card;
    }
    else if (order === 'new-moon' && card.phase === 'Nouvelle Lune') {
      return card;
    }
  });
  return newArray;
};
