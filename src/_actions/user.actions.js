import { userConstants } from '../_constants';
import { userService } from '../_services';

export const userActions = {
  login,
  logout,
  register
};

function login(email, password, history) {
  return dispatch => {
    dispatch(request({ email }));

    userService.login(email, password)
      .then(
        user => {
          dispatch(success(user));
          history.push('/tasks');
        },
        error => {
          dispatch(failure(error));
        }
      );
  };

  function request(email) {
    return { type: userConstants.LOGIN_REQUEST, email };
  }
  function success(email) {
    return { type: userConstants.LOGIN_SUCCESS, email };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function logout(history) {
    userService.logout();
    history.push('/');
    return { type: userConstants.LOGOUT };
}

function register(user, history) {
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
