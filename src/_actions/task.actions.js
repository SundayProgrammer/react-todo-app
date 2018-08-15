import { tasksConstants } from '../_constants';
import { tasksService } from '../_services';

export const taskActions = {
  create,
  getTasks,
  update,
  delete: _delete
};

/*
 * @// TODO:
 * The task object is not returned by backend so there should be some
 * local tasks list created
 */

function create(task, history) {
  return dispatch => {
    const taskTitle = task.title.substr(0,10)
    dispatch(request({ taskTitle }));

    tasksService.createEntity('task', task)
      .then(
        taskTitle => {
          dispatch(success(taskTitle));
          history.push('/tasks');
        },
        error => {
          dispatch(failure(error));
          history.push('/tasks');
        }
      );
  }

  function request(type) {
    return { type: tasksConstants.CREATE_REQUEST, type };
  }
  function success(type) {
    return { type: tasksConstants.CREATE_SUCCESS, type };
  }
  function failure(error) {
    return { type: tasksConstants.CREATE_FAILURE, error };
  }
}

/*
 * Function fetches tasks from different scopes specified by type.
 * 'constraints' argument if defined cares scope URI
 */
function getTasks(type, constraints) {
  return dispatch => {
    dispatch(request({ type }));

    tasksService.getAll(type, constraints)
      .then(response => response.json())
      .then(
        json => {
          dispatch(success(json, type));
        },
        error => {
          dispatch(failure(error));
        }
      );
  }

  const success = (json, type) => {
    sessionStorage.setItem(type, JSON.stringify(json.tasks));
    console.log(json.tasks.map(t => t.data));
    return {
      type: tasksConstants.GET_SUCCESS,
      type,
      posts: json.tasks.map(t => t.data)
    }
  }
  function request(type) {
    return { type: tasksConstants.GET_REQUEST, type };
  }
  // function success(type) {
  //   return { type: tasksConstants.GET_SUCCESS, type };
  // }
  function failure(error) {
    return { type: tasksConstants.GET_FAILURE, error };
  }
}

function update(type, updateObject, history) {
  return dispatch => {
    dispatch(request({ type }));

    tasksService.update(type, updateObject)
      .then(
        type => {
          dispatch(success(type));
          history.push('/tasks');
        },
        error => {
          dispatch(failure(error));
          history.push('/tasks');
        }
      );
  }

  function request(type) {
    return { type: tasksConstants.UPDATE_REQUEST, type };
  }
  function success(type) {
    return { type: tasksConstants.UPDATE_SUCCESS, type };
  }
  function failure(error) {
    return { type: tasksConstants.UPDATE_FAILURE, error };
  }
}

function _delete(type, id, history) {
  return dispatch => {
    dispatch(request({ type }));

    tasksService.delete(type, id)
      .then(
        type => {
          dispatch(success(type));
          history.push('/tasks');
        },
        error => {
          dispatch(failure(error));
          history.push('/tasks');
        }
      );
  }

  function request(type) {
    return { type: tasksConstants.DELETE_REQUEST, type };
  }
  function success(type) {
    return { type: tasksConstants.DELETE_SUCCESS, type };
  }
  function failure(error) {
    return { type: tasksConstants.DELETE_FAILURE, error };
  }
}
