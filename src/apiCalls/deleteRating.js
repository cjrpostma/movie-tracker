import { BASE_URL, RATINGS, USERS } from './constants';

export const deleteRating = async (userID, ratingID) => {
  const response = await fetch(
    `${BASE_URL + USERS}/${userID}${RATINGS}/${ratingID}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (!response.ok) {
    throw new Error('Error deleting rating.');
  }
};
