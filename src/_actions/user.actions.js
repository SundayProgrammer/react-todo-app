import { userConstants } from '../_constants';
import { userService } from '../_services';
import { history } from '../_helpers';

export const userActions = {
  register
};

function register(user) {
  return dispatch => {
    dispatch(request(user));

    userService.register(user)
      .then(
        user => {
          dispatch(success(user));
          history.push('/login');
        },
        error => {
          dispatch(failure(error));
        }
      )
  };

  function request(user) {
    return { type: userConstants.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }
}
