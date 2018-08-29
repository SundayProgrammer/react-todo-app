import { authHeader } from "../_helpers";
import { servicesConstants } from "../_constants";

const request = options => {
  const headers = new Headers({
    "Content-Type": "application/json"
  });

  if (localStorage.getItem("authToken")) {
    headers.append(
      "Authorization",
      "Bearer" + localStorage.getItem("authToken")
    );
  }

  const defaults = { headers: headers };
  options = Object.assign({}, defaults, options);

  return fetch(options).then(response =>
    response.json().then(json => {
      if (!response.ok) {
        if (response.status === 401) {
          logout();
        }
        return Promise.reject(json);
      }
      return json;
    })
  );
};

export const userService = {
  login,
  logout,
  register
};

function login(email, password) {
  return request({
    url: servicesConstants.API_URL + "/users/signin",
    method: "POST",
    body: JSON.stringify({ email, password })
  }).then(
    json => {
      if (json.token) {
        localStorage.setItem(servicesConstants.AUTH_TOKEN);
      }
      return json;
    }
  );
}

function logout() {
  localStorage.removeItem(servicesConstants.AUTH_TOKEN);
}

function register(email, password) {
  return request({
    url: servicesConstants.API_URL + "/users/signup",
    method: "POST",
    body: JSON.stringify({ email, password })
  });
}
