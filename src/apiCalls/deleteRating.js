import { BASE_URL, RATINGS, USERS } from './constants';

export const deleteRating = async (userId, ratingId) => {
  const response = await fetch(BASE_URL + USERS + userId + RATINGS + ratingId);

  if (!response.ok) {
    throw new Error('Error deleting rating.');
  }

  await response.json();
};
