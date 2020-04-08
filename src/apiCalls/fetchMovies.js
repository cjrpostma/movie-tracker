export const fetchMovies = async () => {
  const response = await fetch(
    'https://rancid-tomatillos.herokuapp.com/api/v1/movies'
  );

  if (!response.ok) {
    throw new Error('Error fetching movies.');
  }

  const data = await response.json();

  return data.movies;
};
