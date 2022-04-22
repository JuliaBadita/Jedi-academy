import { API_URL_POSTS, API_TOKEN, POPULATE_POSTS } from "../config";

// find all the posts in Strapi API
async function findAll() {
  const res = await fetch(`${API_URL_POSTS}?${POPULATE_POSTS}`, {
    method: "GET",
    headers: {
      Accept: "Application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
  const res_1 = await res.json();
  return res_1.data;
}

// Find One Post in Strapi API with the slug
async function findOneWithSlug(slug) {
  const qs = require("qs");
  const query = qs.stringify(
    {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: ["img", "img.datasrc"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await fetch(`${API_URL_POSTS}?${query}`, {
    method: "GET",
    headers: {
      Accept: "Application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
  const res_1 = await res.json();
  return res_1.data[0];
}

export default {
  findAll,
  findOneWithSlug
};
