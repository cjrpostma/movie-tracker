import { BASE_URL, LOGIN } from './constants';

export const postUser = async userInfo => {
  const init = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  };

  const response = await fetch(BASE_URL + LOGIN, init);

  if (!response.ok) {
    throw Error('Please use a valid username and password.');
  }

  const data = await response.json();

  return data.user;
};
