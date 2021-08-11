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
