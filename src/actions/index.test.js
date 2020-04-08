import * as actionTypes from '../actionTypes';
import * as actions from '.';

describe('user actions', () => {
  it('should have a type of LOGIN_USER', () => {
    const userInfo = {
      email: 'mock@mock.com',
      password: '123456',
    };

    const expectedAction = {
      type: actionTypes.LOGIN_USER,
      payload: userInfo,
    };

    const result = actions.loginUser(userInfo);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of LOGOUT_USER', () => {
    const expectedAction = {
      type: actionTypes.LOGOUT_USER,
    };

    const result = actions.logoutUser();
    expect(result).toEqual(expectedAction);
  });
});

describe('loader actions', () => {
  it('should have a type of IS_LOADING', () => {
    const expectedAction = {
      type: actionTypes.IS_LOADING,
      payload: true,
    };

    const result = actions.isLoading(true);
    expect(result).toEqual(expectedAction);
  });
});

describe('error actions', () => {
  it('should have a type of HAS_ERRORED', () => {
    const errorMessage = 'There was an error.';

    const expectedAction = {
      type: actionTypes.HAS_ERRORED,
      payload: errorMessage,
    };

    const result = actions.hasErrored(errorMessage);
    expect(result).toEqual(expectedAction);
  });
});

describe('movie actions', () => {
  // TODO Ryan to write movie action tests
  // it();
});
