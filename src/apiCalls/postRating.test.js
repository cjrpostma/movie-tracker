import { BASE_URL, RATINGS, USERS } from './constants';
import { postRating } from './postRating';

describe('postRating', () => {
  const mockMovieID = 19;
  const mockUserID = 2;
  const mockRating = 5;
  const mockResponse = {
    rating: {
      user_id: mockUserID,
      movie_id: mockMovieID,
      rating: mockRating,
    },
  };
  const mockInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      movie_id: mockMovieID,
      rating: mockRating,
    }),
  };

  it('should call fetch with the correct url', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse),
      })
    );

    postRating(mockMovieID, mockUserID, mockRating);
    expect(window.fetch).toHaveBeenCalledWith(
      `${BASE_URL + USERS}/${mockUserID}${RATINGS}`,
      mockInit
    );
  });

  it('should respond with the rating ', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse),
      })
    );

    expect(postRating(mockMovieID, mockUserID, mockRating)).resolves.toEqual(
      mockResponse.rating.rating
    );
  });

  it('should throw when response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false,
      })
    );

    expect(postRating(mockMovieID, mockUserID, mockRating)).rejects.toEqual(
      Error('Invalid movie or rating.')
    );
  });

  it('should throw when failing to fetch', () => {
    window.fetch = jest
      .fn()
      .mockImplementation(() => Promise.reject(Error('Failed to fetch.')));

    expect(postRating(mockMovieID, mockUserID, mockRating)).rejects.toEqual(
      Error('Failed to fetch.')
    );
  });
});
