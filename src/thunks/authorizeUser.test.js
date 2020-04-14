import { authorizeUser } from './authorizeUser';
import { isLoading, hasErrored, getMoviesSuccess } from '../actions';

describe('requestMovies', () => {
  let mockUrl;
  let mockUser;
  let mockDispatch;
  let mockLogin;
  let mockFetchObj;

  beforeEach(() => {
    mockUrl = 'https://rancid-tomatillos.herokuapp.com/api/v1/login';
    mockUser = {id: 2, name: "Sam", email: "sam@turing.io"};
    mockLogin = {email: "sam@turing.io", password: "123456"};
    mockFetchObj = {"body": "{\"email\":\"sam@turing.io\",\"password\":\"123456\"}", "headers": {"Content-Type": "application/json"}, "method": "POST"};
    mockDispatch = jest.fn();
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockUser),
      })
    );
  });

  it('calls dispatch with isLoading(true)', () => {
    const thunk = authorizeUser();
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
  });

  it('calls fetch with the correct url', () => {
    const thunk = authorizeUser(mockLogin);
    thunk(mockDispatch);
    expect(window.fetch).toHaveBeenCalledWith(mockUrl, mockFetchObj);
  });

  it('should dispatch isLoading(false) if response ok', async () => {
    const thunk = authorizeUser();
    expect(mockDispatch).not.toHaveBeenCalledWith(isLoading(false));
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  });

  it.skip('should dispatch hasErrored with message if response not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false,
      })
    );

    const thunk = authorizeUser();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(
      hasErrored('Error fetching movies.')
    );
  });

  it.skip('should dispatch authorizeUser with the correct arguments', async () => {
    const thunk = authorizeUser(mockLogin);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(
      getMoviesSuccess(mockUser)
    );
  });
});
