import { requestRatings } from './requestRatings';
import { isLoading, hasErrored, getRatingsSuccess } from '../actions';
import { BASE_URL, RATINGS, USERS } from '../apiCalls/constants';

describe('requestRatings', () => {
  let mockUrl;
  let mockDispatch;
  let mockRatings;
  const mockUserID = 2;

  beforeEach(() => {
    mockUrl = `${BASE_URL + USERS}/${mockUserID}${RATINGS}`;
    mockDispatch = jest.fn();
    mockRatings = {
      ratings: [
        {
          id: 50,
          user_id: 2,
          movie_id: 18,
          rating: 5,
          created_at: '2020-04-10T22:18:31.559Z',
          updated_at: '2020-04-10T22:18:31.559Z',
        },
        {
          id: 51,
          user_id: 2,
          movie_id: 7,
          rating: 7,
          created_at: '2020-04-10T22:18:33.746Z',
          updated_at: '2020-04-10T22:18:33.746Z',
        },
      ],
    };

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockRatings),
      })
    );
  });

  it('should call dispatch with isLoading(true)', () => {
    const thunk = requestRatings(mockUserID);
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
  });

  it('should call fetch with the correct url', () => {
    const thunk = requestRatings(mockUserID);
    thunk(mockDispatch);
    expect(window.fetch).toHaveBeenCalledWith(mockUrl);
  });

  it('should dispatch isLoading(false) if response ok', async () => {
    const thunk = requestRatings(mockUserID);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  });

  it('should dispatch hasErrored with message if response not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false,
      })
    );

    const thunk = requestRatings(mockUserID);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(
      hasErrored('Error fetching ratings.')
    );
  });

  it('should dispatch requestRatings with the correct arguments', async () => {
    const thunk = requestRatings(mockUserID);
    mockDispatch = jest.fn().mockResolvedValueOnce(mockRatings);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(
      getRatingsSuccess(mockRatings.ratings)
    );
  });
});
