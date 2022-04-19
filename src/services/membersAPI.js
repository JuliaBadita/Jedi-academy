function findAll() {
  return fetch("https://admin-academie-jedi.herokuapp.com/api/members", {
    method: "GET",
    headers: {
      Accept: "Application/json",
    },
  }).then((res) => res.json());
}

export default {
  findAll,
};
