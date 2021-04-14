import lodash from 'lodash';

export const SET_USERS = 'SET_USERS';
export const GET_USERS = 'GET_USERS';
export const USERS_IS_LOADED = 'USERS_IS_LOADED';
export const SET_PAGE_OF_USERS = 'SET_PAGE_OF_USERS';
export const SET_SORT_DIRECTION = 'SET_SORT_DIRECTION';
export const SET_SORT_BY = 'SET_SORT_BY';
export const SORT_PAGE_OF_USERS = 'SORT_PAGE_OF_USERS';
export const SET_ITEMS_PER_PAGE = 'SET_ITEMS_PER_PAGE';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_PAGE_COUNT = 'SET_PAGE_COUNT';
export const SET_TABLE_HEADERS = 'SET_TABLE_HEADERS';
export const SEARCH_SUBMIT = 'SEARCH_SUMBIT';
export const SEARCH_RESET = 'SEARCH_RESET';
export const SET_ERROR = 'SET_ERROR';

export const setUsers = (payload) => {
  return {
    type: SET_USERS,
    payload,
  };
};

export const setUsersIsLoaded = () => {
  return {
    type: USERS_IS_LOADED,
  };
};

export const setPageOfUsers = (payload) => {
  return {
    type: SET_PAGE_OF_USERS,
    payload,
  };
};

export const setSortDirection = () => {
  return {
    type: SET_SORT_DIRECTION,
  };
};

export const setSortBy = (payload) => {
  return {
    type: SET_SORT_BY,
    payload,
  };
};

export const setItemsPerPage = (payload) => {
  return {
    type: SET_ITEMS_PER_PAGE,
    payload,
  };
};

export const setCurrentPage = (payload) => {
  return {
    type: SET_CURRENT_PAGE,
    payload,
  };
};

export const setPageCount = (payload) => {
  return {
    type: SET_PAGE_COUNT,
    payload,
  };
};

export const setTableHeaders = (payload) => {
  return {
    type: SET_TABLE_HEADERS,
    payload,
  };
};

export const onSearchSubmit = (payload) => {
  return {
    type: SEARCH_SUBMIT,
    payload,
  };
};

export const onSearchReset = (payload) => {
  return {
    type: SEARCH_RESET,
    payload,
  };
};

export const setError = (payload) => {
  return {
    type: SET_ERROR,
    payload,
  };
};

export const sortPageOfUsers = (value, page) => (dispatch) => {
  dispatch(setPageOfUsers(page));
  dispatch(setSortDirection());
  dispatch(setSortBy(value));
};

export const getUsers = () => async (dispatch) => {
  try {
    const res = await fetch(`https://my.api.mockaroo.com/users.json?key=3c3a0c40`);
    const users = await res.json();
    const sortedUsers = lodash.orderBy(users, 'firstName', 'asc');
    const pageCount = Math.ceil(sortedUsers.length / 10);
    const tableHeaders = Object.keys(users[0]).map((item) => {
      return { label: item, status: true };
    });
    dispatch(setUsers(sortedUsers));
    dispatch(setPageOfUsers(sortedUsers.slice(0, 10)));
    dispatch(setTableHeaders(tableHeaders));
    dispatch(setUsersIsLoaded());
    dispatch(setPageCount(pageCount));
    dispatch(setSortBy('firstName'));
  } catch (error) {
    dispatch(setError(error));
  }
};
