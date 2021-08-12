/* eslint-disable import/prefer-default-export */

import { hiddenRoles } from 'src/data/hiddenRoles';
import { villagePeople } from 'src/data/villagePeople';
import { newMoonCards } from 'src/data/newMoonCards';

export const selectData = (state) => {
  let currentData = [];
  if (state.hiddenRolesPage) {
    currentData = hiddenRoles;
  }
  else if (state.villageRolesPage) {
    currentData = villagePeople;
  }
  else if (state.newMoonCardsPage) {
    currentData = newMoonCards;
  }
  return currentData;
};
