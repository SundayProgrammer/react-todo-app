import { tasksConstants } from '../_constants';

export function tasksFetch(
  state = {
    isFetching: false,
    isEdited: false
  },
  action) {
  switch (action.type) {
    case tasksConstants.GET_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case tasksConstants.GET_SUCCESS:
      return {
        ...state,
        isFetching: false
      };
    case tasksConstants.CREATE_REQUEST:
      return {
        ...state,
        isEdited: true
      };
    case tasksConstants.GET_FAILURE:
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
