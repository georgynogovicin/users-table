import { SET_PAGE_COUNT, SEARCH_RESET, SEARCH_SUBMIT } from '../actions/actions';
import { pagination } from './pagination';

describe('pagination reducer', () => {
  let state = {};

  beforeEach(() => {
    state = {
      currentPage: 1,
      pageCount: null,
    };
  });

  it('should handle SET_PAGE_COUNT', () => {
    expect(
      pagination(state, {
        type: SET_PAGE_COUNT,
        payload: 10,
      })
    ).toEqual({
      currentPage: 1,
      pageCount: 10,
    });
  });

  it('should handle SEARCH_RESET', () => {
    expect(
      pagination(state, {
        type: SEARCH_RESET,
        payload: {
          pages: 10,
        },
      })
    ).toEqual({
      currentPage: 1,
      pageCount: 10,
    });
  });

  it('should handle SEARCH_SUBMIT', () => {
    expect(
      pagination(state, {
        type: SEARCH_SUBMIT,
      })
    ).toEqual({
      currentPage: 1,
      pageCount: 1,
    });
  });

  it('should return default state', () => {
    expect(pagination(state, {})).toEqual(state);
  });
});
