import { authHeader } from '../_helpers';

export const userService = {
  login,
  logout,
  register,
  createEntity,
  getAllTasks,
  getClassifiers,
  update,
  delete: _delete
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

/*
 *  POST
 *
 * Function creates new records in DB of one of following types:
 * - task
 * - project
 * - category
 */
function createEntity(type, objectToCreate) {
  const requestOptions = {
    method: 'GET',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(objectToCreate)
  };

  return fetch(`/api/${type}`, requestOptions).then(handleResponse);
}

/*
 *  GET
 *
 * Function fetches tasks from one of given api endpoints:
 * - daily
 * - weekly
 * - project
 * - category
 * - done
 * - active
 * - all
 */
function getAllTasks(type) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(`/api/tasks/${type}`, requestOptions).then(handleResponse);
}

function getClassifiers(type) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(`/api/${type}`, requestOptions).then(handleResponse);
}

/*
 *  UPDATE
 *
 * Function updates one of following entities:
 * - task
 * - project
 * - category
 * - user @// TODO: think about side effects
 */

function update(type, updateObject) {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(updateObject)
  };

  return fetch(`/api/${type}/${updateObject.id}`);
}

/*
 *  DELETE
 *
 * Function deletes one of following entities:
 * - task
 * - project
 * - category
 */

function _delete(type, id) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader()
  };

  return fetch(`/api/${type}/${id}`, requestOptions).then(handleResponse);
}

/*
 *  OTHER
 */

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
