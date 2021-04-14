import { SET_CURRENT_PAGE, SET_PAGE_COUNT, SET_ITEMS_PER_PAGE, SEARCH_SUBMIT, SEARCH_RESET } from '../actions/actions';

const initialState = {
  currentPage: 1,
  pageCount: null,
};

const pagination = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload.page,
      };

    case SET_PAGE_COUNT:
      return {
        ...state,
        pageCount: action.payload,
      };

    case SET_ITEMS_PER_PAGE: {
      return {
        ...state,
        pageCount: action.payload.pageCount,
        currentPage: 1,
      };
    }

    case SEARCH_SUBMIT: {
      return {
        ...state,
        currentPage: 1,
        pageCount: 1,
      };
    }

    case SEARCH_RESET: {
      return {
        ...state,
        pageCount: action.payload.pages,
        currentPage: 1,
      };
    }

    default:
      return state;
  }
};

export { pagination };
