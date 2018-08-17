import { combineReducers } from 'redux';
import { tasksConstants } from '../_constants';

export const selectedFilter = (state = 'daily', action) => {
  switch (action.type) {
    case tasksConstants.SELECT_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export const tasksByFilter = (state = {}, action) => {
  switch (action.type) {
    case tasksConstants.GET_REQUEST:
    case tasksConstants.GET_SUCCESS:
      return {
        ...state,
        [action.filter]: tasks(state[action.filter], action)
      };
    case tasksConstants.CREATE_REQUEST:
    case tasksConstants.GET_FAILURE:
    case tasksConstants.CREATE_SUCCESS:
    case tasksConstants.CREATE_FAILURE:
    default:
      return state;
  }
}

const tasks = (
  state = {
    isFetching: false,
    isEdited: false,
    items: []
  }, action) => {
  switch (action.type) {
    case tasksConstants.GET_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case tasksConstants.GET_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.tasks
      };
    case tasksConstants.EDIT_REQUEST:
      return {
        ...state,
        isFetching: false,
        isEdited: true
      };
    case tasksConstants.EDIT_SUCCESS:
    case tasksConstants.EDIT_FAILURE:
      return {
        ...state,
        isFetching: false,
        isEdited: false
      }
    case tasksConstants.GET_FAILURE:
    case tasksConstants.CREATE_REQUEST:
    case tasksConstants.CREATE_SUCCESS:
    case tasksConstants.CREATE_FAILURE:
      return {
        isFetching: false,
        isEdited: false
      };
    default:
      return state;
  }
}
