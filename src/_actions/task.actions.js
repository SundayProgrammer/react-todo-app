import { tasksConstants } from '../_constants';
import { tasksService } from '../_services';

export const taskActions = {

};

/*
 * @// TODO:
 * The task object is not returned by backend so there should be some
 * local tasks list created
 */

function createTask(task, history) {
  return dispatch => {
    dispatch(request({ task.title.substr(0,10) }));

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

  request = (title) => {
    return { type: tasksConstants.CREATION_REQEST, title };
  }
  success = (title) => {
    return { type: tasksConstants.CREATION_SUCCESS, title };
  }
  failure = (error) => {
    return { type: tasksConstants.CREATION_FAILURE, error };
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
      .then(
        type => {
          dispatch(success(type));
        },
        error => {
          dispatch(failure(error));
        }
      );
  }

  request = (type) => {
    return { type: tasksConstants.CREATION_REQEST, type };
  }
  success = (type) => {
    return { type: tasksConstants.CREATION_SUCCESS, type };
  }
  failure = (error) => {
    return { type: tasksConstants.CREATION_FAILURE, error };
  }
}

function getClassifiers(type) {
  return dispatch => {
    dispatch(request({ type }));

    tasksService.getClassifiers(type)
      .then(
        type => {
          dispatch(success(type));
        },
        error => {
          dispatch(failure(error));
        }
      );
  }

  request = (type) => {
    return { type: tasksConstants.CREATION_REQEST, type };
  }
  success = (type) => {
    return { type: tasksConstants.CREATION_SUCCESS, type };
  }
  failure = (error) => {
    return { type: tasksConstants.CREATION_FAILURE, error };
  }
}

function update(type, updateObject) {
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

  request = (type) => {
    return { type: tasksConstants.CREATION_REQEST, type };
  }
  success = (type) => {
    return { type: tasksConstants.CREATION_SUCCESS, type };
  }
  failure = (error) => {
    return { type: tasksConstants.CREATION_FAILURE, error };
  }
}

function _delete(type, id) {
  return dispatch => {
    dispatch(request({ type }));

    tasksService.update(type, id)
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

  request = (type) => {
    return { type: tasksConstants.CREATION_REQEST, type };
  }
  success = (type) => {
    return { type: tasksConstants.CREATION_SUCCESS, type };
  }
  failure = (error) => {
    return { type: tasksConstants.CREATION_FAILURE, error };
  }
}
