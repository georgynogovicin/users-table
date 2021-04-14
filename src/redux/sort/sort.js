import { SET_SORT_DIRECTION, SET_SORT_BY } from '../actions/actions';

const initialState = {
  sortDirection: 'asc',
  sortBy: null,
};

const sort = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT_DIRECTION: {
      const newDirection = state.sortDirection === 'asc' ? 'desc' : 'asc';
      return {
        ...state,
        sortDirection: newDirection,
      };
    }

    case SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };

    default:
      return state;
  }
};

export { sort };
