import { categoryConstants, projectConstants } from './_constants';
import { tasksService } from './_services';

export const classifiersActions = {
  create,
  get,
  update,
  delete: _delete
};

function create(type, objectToCreate, history) {
  return dispatch => {
    dispatch(request({ type }));

    tasksService.createEntity(type, objectToCreate)
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
    if (type === 'project') {
      return { type: projectConstants.CREATE_REQUEST, type };
    } else {
      return { type: categoryConstants.CREATE_REQUEST, type };
    }
  }
  success = (type) => {
    if (type === 'project') {
      return { type: projectConstants.CREATE_SUCCESS, type };
    } else {
      return { type: categoryConstants.CREATE_SUCCESS, type };
    }
  }
  failure = (error) => {
    return { type: tasksConstants.CREATE_FAILURE, error };
  }
}

function get(type) {
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
    if (type === 'project') {
      return { type: projectConstants.GET_REQUEST, type };
    } else {
      return { type: categoryConstants.GET_REQUEST, type };
    }
  }
  success = (type) => {
    if (type === 'project') {
      return { type: projectConstants.GET_SUCCESS, type };
    } else {
      return { type: categoryConstants.GET_SUCCESS, type };
    }
  }
  failure = (error) => {
    return { type: tasksConstants.GET_FAILURE, error };
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
    if (type === 'project') {
      return { type: projectConstants.UPDATE_REQUEST, type };
    } else {
      return { type: categoryConstants.UPDATE_REQUEST, type };
    }
  }
  success = (type) => {
    if (type === 'project') {
      return { type: projectConstants.UPDATE_SUCCESS, type };
    } else {
      return { type: categoryConstants.UPDATE_SUCCESS, type };
    }
  }
  failure = (error) => {
    return { type: tasksConstants.UPDATE_FAILURE, error };
  }
}

function _delete(type, id) {
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

  request = (type) => {
    if (type === 'project') {
      return { type: projectConstants.DELETE_REQUEST, type };
    } else {
      return { type: categoryConstants.DELETE_REQUEST, type };
    }
  }
  success = (type) => {
    if (type === 'project') {
      return { type: projectConstants.DELETE_SUCCESS, type };
    } else {
      return { type: categoryConstants.DELETE_SUCCESS, type };
    }
  }
  failure = (error) => {
    return { type: tasksConstants.DELETE_FAILURE, error };
  }
}
