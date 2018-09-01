import { authHeader } from "../_helpers";
import { userService } from "./user.service";
import { config } from "./config";
import { servicesConstants } from "../_constants";

export const tasksService = {
  createEntity,
  getAll,
  getClassifiers,
  update,
  delete: _delete
};

/*
 *  POST
 *
 * Function creates new records in DB of one of following types:
 * - task
 * - project
 * - category
 */
function createEntity(type, objectToCreate) {
  return request({
    url: servicesConstants.API_URL + `/tasks/${type}`,
    method: "POST",
    body: JSON.stringify(objectToCreate)
  });
}

/*
 *  GET
 *
 * Function fetches tasks from one of given api endpoints:
 * - daily
 * - weekly
 * - project + id
 * - category + id
 * - done
 * - active
 * - all
 */
function getAll(type, constraints) {
  if (typeof constraints === "undefined") {
    return request({
      url: servicesConstants.API_URL + `/tasks/${type}`,
      method: "GET"
    });
  } else {
    return request({
      url: servicesConstants.API_URL + `/tasks/${type}/${constraints.id}`,
      method: "GET"
    });
  }
}

function getClassifiers(type) {
  return request({
    url: servicesConstants.API_URL + `/${type}`,
    method: "GET"
  });
}

/*
 *  UPDATE
 *
 * Function updates one of following entities:
 * - task
 * - project
 * - category
 * - user @// TODO: think about side effects of putting users on this endpoint
 */

function update(type, updateObject) {
  return request({
    url: servicesConstants.API_URL + `/${type}/${updateObject.id}`,
    method: "PUT",
    body: JSON.stringify(updateObject)
  });
}

/*
 *  DELETE_delete
 *
 * Function deletes one of following entities:
 * - task
 * - project
 * - category
 */

function _delete(type, id) {
  return request({
    url: servicesConstants.API_URL + `/${type}/${id}`,
    method: "DELETE"
  });
}

/*
 *  OTHER
 */
const request = options => {
  let headers = {};
  if (localStorage.getItem(servicesConstants.AUTH_TOKEN)) {
    headers = { ...authHeader(), "Content-Type": "application/json" };
  } else {
    return Promise.reject({ error: "You have to sign in to reach this path." });
  }

  const defaults = { headers: headers };
  options = Object.assign({}, defaults, options);

  return fetch(options.url, options).then(response =>
    response.json().then(json => {
      if (!response.ok) {
        if (response.status === 401) {
          userService.logout();
        }
        return Promise.reject(json);
      }
      return json;
    })
  );
};
