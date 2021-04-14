import { SET_TABLE_HEADERS } from '../actions/actions';

const initialState = [];

const tableHeaders = (state = initialState, action) => {
  switch (action.type) {
    case SET_TABLE_HEADERS:
      return action.payload;

    default:
      return state;
  }
};

export { tableHeaders };
