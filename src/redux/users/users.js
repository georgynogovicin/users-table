import {
  SET_USERS,
  USERS_IS_LOADED,
  SET_PAGE_OF_USERS,
  SET_ITEMS_PER_PAGE,
  SET_CURRENT_PAGE,
  SEARCH_SUBMIT,
  SEARCH_RESET,
} from '../actions/actions';

const initialState = {
  usersList: [],
  usersIsLoaded: false,
  pageOfUsers: [],
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        usersList: action.payload,
      };

    case USERS_IS_LOADED:
      return {
        ...state,
        usersIsLoaded: true,
      };

    case SET_PAGE_OF_USERS: {
      return {
        ...state,
        pageOfUsers: action.payload,
      };
    }

    case SET_ITEMS_PER_PAGE: {
      const slicedPage = state.usersList.slice(0, action.payload.value);

      return {
        ...state,
        pageOfUsers: slicedPage,
      };
    }

    case SET_CURRENT_PAGE: {
      const { start, finish } = action.payload;
      const newPage = state.usersList.slice(start, finish + 1);

      return {
        ...state,
        pageOfUsers: newPage,
      };
    }

    case SEARCH_SUBMIT: {
      const newArr = state.usersList.filter((item) => {
        const values = Object.values(item);
        const regEx = new RegExp(action.payload, 'i');
        return values.some((value) => regEx.test(value));
      });

      return {
        ...state,
        pageOfUsers: newArr,
      };
    }

    case SEARCH_RESET: {
      const newArr = state.usersList.slice(0, action.payload.itemsPerPage + 1);

      return {
        ...state,
        pageOfUsers: newArr,
      };
    }

    default:
      return state;
  }
};

export { users };
