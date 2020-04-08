import { postUser } from './postUser';

describe('postUser', () => {
  const mockUserInfo = {
    email: 'test@test.com',
    password: 'mockPassword',
  };

  const mockRequest = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(mockUserInfo),
  };

  const mockResponse = {
    user: { id: 1, name: 'mockUsername', email: 'test@test.com' },
  };

  it('should call fetch with the correct arguments', () => {
    window.fetch = jest.fn();

    postUser(mockUserInfo);
    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(window.fetch).toHaveBeenCalledWith(
      'https://rancid-tomatillos.herokuapp.com/api/v1/login',
      mockRequest
    );
  });

  it('should return the correct data', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse),
      })
    );

    expect(postUser(mockUserInfo)).resolves.toEqual(mockResponse.user);
  });

  it('should throw if response not ok', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false,
      })
    );

    expect(postUser(mockUserInfo)).rejects.toEqual(
      Error('Please use a valid username and password.')
    );
  });

  it('should reject when failing to fetch', () => {
    window.fetch = jest
      .fn()
      .mockImplementation(() => Promise.reject(Error('Failed to fetch')));

    expect(postUser(mockUserInfo)).rejects.toEqual(Error('Failed to fetch'));
  });
});
