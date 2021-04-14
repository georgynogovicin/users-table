import { SET_ERROR } from '../actions/actions';

const initialState = null;

const errors = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR: {
      return {
        error: action.payload,
      };
    }

    default:
      return state;
  }
};

export { errors };
