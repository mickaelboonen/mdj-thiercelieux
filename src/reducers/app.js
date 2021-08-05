import {
  CLOSE_BURGER,
  TOGGLE_BURGER,
} from '../actions';

const initialState = {
  isBurgerOpen: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CLOSE_BURGER:
      return {
        ...state,
        isBurgerOpen: false,
      };
    case TOGGLE_BURGER:
      return {
        ...state,
        isBurgerOpen: !state.isBurgerOpen,
      };
    default:
      return state;
  }
};

export default reducer;
