import { tasksConstants } from '../_constants';

export function tasksFetch(state = {}, action) {
  switch (action.type) {
    case tasksConstants.TASK_GET_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case tasksConstants.CREATE_REQUEST:
      return {
        ...state,
        isEdited: true
      };
    case tasksConstants.GET_SUCCESS:
    case tasksConstants.GET_FAILURE:
    case tasksConstants.CREATE_SUCCESS:
    case tasksConstants.CREATE_FAILURE:
      return {};
    default:
      state;
  }
}
