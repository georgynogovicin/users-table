import * as actions from './actions';

describe('action creators', () => {
  it('should create an action to set users to store', () => {
    const users = ['user1', 'user2'];

    const expectedAction = {
      type: actions.SET_USERS,
      payload: users,
    };

    expect(actions.setUsers(users)).toEqual(expectedAction);
  });
});
