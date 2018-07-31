import { userConstants } from '../_constants';

export function registration(state = {}, action) {
  switch (action.type) {
    case 'REGISTER_REQUEST':
      return { isRegistering: true };
    case 'REGISTER_FAILURE':
      return {};
    case 'REGISTER_SUCCESS':
      return {};
    default:
      return state;
  }
}
