import { API_URL_MEMBERS, POPULATE_MEMBERS } from "../config";

function findAll() {
  return fetch(`${API_URL_MEMBERS}?${POPULATE_MEMBERS}`, {
    method: "GET",
    headers: {
      Accept: "Application/json",
    },
  }).then((res) => res.json());
}

function findOne(id) {
  return fetch(`${API_URL_MEMBERS}/${id}`).then((res) => res.json());
}

export default {
  findAll,
  findOne,
};
