import { servicesConstants } from "../_constants";

export function authHeader() {
  if (localStorage.getItem(servicesConstants.AUTH_TOKEN)) {
    return { Authorization: "Bearer " + localStorage.getItem(servicesConstants.AUTH_TOKEN) };
  } else {
    return {};
  }
}
