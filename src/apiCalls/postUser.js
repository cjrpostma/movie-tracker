export const postUser = async userInfo => {
  const response = await fetch(
    'https://rancid-tomatillos.herokuapp.com/api/v1/login',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    }
  );

  if (!response.ok) {
    throw Error('Please use a valid username and password.');
  }

  const data = await response.json();

  return data.user;
};
