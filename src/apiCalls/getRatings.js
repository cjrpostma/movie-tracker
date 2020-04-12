import { BASE_URL, RATINGS, USERS } from './constants';

export const getRatings = async userID => {
  const response = await fetch(`${BASE_URL + USERS}/${userID}${RATINGS}`);

  if (!response.ok) {
    throw new Error('Error fetching ratings.');
  }

  const data = await response.json();

  return data.ratings;
};
