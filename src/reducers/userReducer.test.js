import * as actionTypes from '../actionTypes';
import { userReducer } from './userReducer';

describe('userReducer', () => {
  it('should return initial state', () => {
    const expected = null;
    const result = userReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return user details', () => {
    const expected = {
      email: 'mock@mock.com',
      password: '123456',
    };

    const result = userReducer(null, {
      type: actionTypes.LOGIN_USER,
      payload: {
        email: 'mock@mock.com',
        password: '123456',
      },
    });

    expect(result).toEqual(expected);
  });

  it('should logout a user', () => {
    const expected = null;
    const result = userReducer(
      {
        user: {
          id: 1,
          name: 'mockUser',
          email: 'mock@mock.com',
        },
      },
      {
        type: actionTypes.LOGOUT_USER,
      }
    );

    expect(result).toEqual(expected);
  });
});
