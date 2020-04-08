import { fetchMovies } from './fetchMovies';

describe('fetchMovies', () => {
  let mockResponse;

  beforeEach(() => {
    mockResponse = [
      {
        id: 1,
        title: 'mockTitle',
        poster_path: 'mockPosterPath',
        backdrop_path: 'mockBackdropPath',
        release_date: '2020-01-01',
        overview: 'mockOverview',
        average_rating: 10,
      },
    ];

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: Promise.resolve(mockResponse),
      })
    );
  });

  it('should call fetch with the correct arguments', () => {
    fetchMovies();
    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(window.fetch).toHaveBeenCalledWith(
      'https://rancid-tomatillos.herokuapp.com/api/v1/movies'
    );
  });
});
