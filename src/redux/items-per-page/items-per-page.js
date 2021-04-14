import { SET_ITEMS_PER_PAGE } from '../actions/actions';

const initialState = 10;

const itemsPerPage = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS_PER_PAGE:
      return action.payload.value;

    default:
      return state;
  }
};

export { itemsPerPage };
