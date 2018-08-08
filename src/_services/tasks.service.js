import { authHeader } from '../_helpers';
import { userService } from './user.service';

export const tasksService = {
  createEntity,
  getAll,
  getClassifiers,
  update,
  delete: _delete
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
    method: 'POST',
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
 * - project + id
 * - category + id
 * - done
 * - active
 * - all
 */
function getAll(type, constraints) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  if (typeof constraints.id === 'undefined') {
      return fetch(`/api/tasks/${type}`, requestOptions).then(handleResponse);
  } else {
    return fetch(`/api/tasks/${type}/${constraints.id}`, requestOptions).then(handleResponse);
  }

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
 *  DELETE_delete
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
        userService.logout();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
