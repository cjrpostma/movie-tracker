import {
  getMovie,
  getTopMovies,
  getLatestMovies,
  getMovieRating,
  getRatingID,
} from './index';

const mockRatings = [
  {
    "id": 50,
    "user_id": 2,
    "movie_id": 18,
    "rating": 5,
    "created_at": "2020-04-10T22:18:31.559Z",
    "updated_at": "2020-04-10T22:18:31.559Z"
  },
  {
    "id": 51,
    "user_id": 2,
    "movie_id": 7,
    "rating": 7,
    "created_at": "2020-04-10T22:18:33.746Z",
    "updated_at": "2020-04-10T22:18:33.746Z"
  },
  {
    "id": 53,
    "user_id": 2,
    "movie_id": 10,
    "rating": 7,
    "created_at": "2020-04-10T22:29:01.246Z",
    "updated_at": "2020-04-10T22:29:01.246Z"
  },
]

const mockState = {
  movies: [
    {
      id: 1,
      title: 'mockTitle1',
      poster_path: 'mockPosterPath1',
      backdrop_path: 'mockBackdropPath1',
      release_date: 'mockReleaseDate1',
      overview: 'mockOverview1',
      average_rating: 2,
    },
    {
      id: 2,
      title: 'mockTitle2',
      poster_path: 'mockPosterPath2',
      backdrop_path: 'mockBackdropPath2',
      release_date: 'mockReleaseDate2',
      overview: 'mockOverview2',
      average_rating: 10,
    },
  ],
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

it('(getMovie) should find a movie by movie_id', () => {
  expect(getMovie(mockState, 2)).toEqual(mockState.movies[1]);
});

it('(getTopMovies) should sort movies by average_rating', () => {
  const topMovies = getTopMovies(mockState.movies);

  // assert that the original array is not mutated
  expect(mockState.movies).toBe(mockState.movies);

  // assert that the return is a new array
  expect(topMovies).not.toBe(mockState.movies);

  // assert that returned array is sorted descending
  let isSorted = true;

  for (let index = 0; index < topMovies.length - 1; index++) {
    if (
      !(topMovies[index].average_rating >= topMovies[index + 1].average_rating)
    ) {
      isSorted = false;
    }
  }

  expect(isSorted).toBeTruthy();
});

it("getMovieRating should be able to get a movie rating by its id", () => {
  const movieRatings = getMovieRating(18, mockRatings);
  const noRating = getMovieRating(11, mockRatings);

  expect(movieRatings).toEqual(5);
  expect(noRating).toEqual(null);
})

it("getRatingID should be able to get a movie rating id", () => {
  const ratingID = getRatingID(18, mockRatings);

  expect(ratingID).toEqual(50);
})
