import { BASE_URL, RATINGS, USERS } from './constants';

export const postRating = async (movieID, userID, newRating) => {
  const data = {movie_id: movieID, rating: newRating};
  const init = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(BASE_URL + USERS + "/" + userID + RATINGS, init);

  if (!response.ok) {
    throw Error('Invalid movie or rating.');
  }

  const rating = await response.json();

  return rating;
}
