import { authHeader } from '../_helpers';

export const userService = {
  register
};

function register(user) {
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(user),
    credentials: 'include'
  }

  return fetch('/api/users/register', requestOptions).then(handleResponse);
}
