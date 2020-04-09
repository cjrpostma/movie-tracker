import { getMovies } from './getMovies';
import { isLoading, hasErrored, requestMovies } from '../actions';

describe('getMovies', () => {
  let mockUrl;
  let mockMovies;
  let mockDispatch;

  beforeEach(() => {
    mockUrl = 'https://rancid-tomatillos.herokuapp.com/api/v1/movies';
    mockMovies = {
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
    mockDispatch = jest.fn();
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockMovies),
      })
    );
  });

  it('calls dispatch with isLoading(true)', () => {
    const thunk = getMovies();
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
  });

  it('calls fetch with the correct url', () => {
    const thunk = getMovies();
    thunk(mockDispatch);
    expect(window.fetch).toHaveBeenCalledWith(mockUrl);
  });

  it('should dispatch isLoading(false) if response ok', async () => {
    const thunk = getMovies();
    expect(mockDispatch).not.toHaveBeenCalledWith(isLoading(false));
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  });

  it('should dispatch hasErrored with message if response not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false,
      })
    );

    const thunk = getMovies();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(
      hasErrored('Error fetching movies.')
    );
  });

  it('should dispatch requestMovies with the correct arguments', async () => {
    const thunk = getMovies();
    mockDispatch = jest.fn().mockResolvedValueOnce(mockMovies);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(requestMovies(mockMovies.movies));
  });
});
