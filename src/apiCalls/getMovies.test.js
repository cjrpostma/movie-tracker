import { getMovies } from './getMovies';

describe('getMovies', () => {
  const mockResponse = {
    movies: [
      {
        id: 1,
        title: 'mockTitle1',
        poster_path: 'mockPosterPath1',
        backdrop_path: 'mockBackdropPath1',
        release_date: 'mockReleaseDate1',
        overview: 'mockOverview1',
        average_rating: 1,
      },
      {
        id: 2,
        title: 'mockTitle2',
        poster_path: 'mockPosterPath2',
        backdrop_path: 'mockBackdropPath2',
        release_date: 'mockReleaseDate2',
        overview: 'mockOverview2',
        average_rating: 2,
      },
    ],
  };

  it('should call fetch with the correct arguments', () => {
    window.fetch = jest.fn();

    getMovies();
    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(window.fetch).toHaveBeenCalledWith(
      'https://rancid-tomatillos.herokuapp.com/api/v1/movies'
    );
  });

  it('should return the correct data', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse),
      })
    );

    expect(getMovies()).resolves.toEqual(mockResponse.movies);
  });

  it('should throw if response not ok', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false,
      })
    );

    expect(getMovies()).rejects.toEqual(Error('Error fetching movies.'));
  });

  it('should reject when failing to fetch', () => {
    window.fetch = jest
      .fn()
      .mockImplementation(() => Promise.reject(Error('Failed to fetch')));

    expect(getMovies()).rejects.toEqual(Error('Failed to fetch'));
  });
});
