import { BASE_URL, RATINGS, USERS } from './constants';

export const getRatings = async userId => {
  const response = await fetch(BASE_URL + USERS + userId + RATINGS);

  if (!response.ok) {
    throw new Error('Error fetching ratings.');
  }

  const data = await response.json();

  return data.ratings;
};
