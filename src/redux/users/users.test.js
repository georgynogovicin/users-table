import { users } from './users';

describe('users reducer', () => {
  it('should return the initial state', () => {
    expect(users(undefined, {})).toEqual({
      usersList: [],
      usersIsLoaded: false,
      pageOfUsers: [],
    });
  });
});
