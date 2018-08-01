import { authHeader } from '../_helpers';

export const userService = {
  login,
  logout,
  register
};

function login(email, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({email, password})
  }

  return fetch('/api/users/authenticate', requestOptions)
            .then(handleResponse)
            .then(user => {
              if (user.token) {
                localStorage.setItem('user', JSON.stringify(user));
              }

              return user;
            });
}

function logout() {
  localStorage.removeItem('user');
}

function register(user) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  };

  return fetch('/api/users/register', requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        logout();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
