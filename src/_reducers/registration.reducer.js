import { userConstants } from '../_constants';

export function registration(state = {}, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { isRegistering: true };
    case userConstants.REGISTER_FAILURE:
      return {};
    case userConstants.REGISTER_SUCCESS:
      return {};
    default:
      return state;
  }
}
