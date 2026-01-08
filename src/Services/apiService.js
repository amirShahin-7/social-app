import axios from "axios";

const BASE_URL = "https://linked-posts.routemisr.com";

//  GET request
export const apiGet = (endpoint, requiresAuth = true) => {
  const options = {
    method: "GET",
    url: `${BASE_URL}${endpoint}`,
  };

  if (requiresAuth) {
    options.headers = {
      token: localStorage.getItem("userToken"),
    };
  }
  return axios.request(options);
};

//  POST request
export const apiPost = (endpoint, data, requiresAuth = true) => {
  const options = {
    method: "POST",
    url: `${BASE_URL}${endpoint}`,
    data,
  };

  if (requiresAuth) {
    options.headers = {
      token: localStorage.getItem("userToken"),
    };
  }

  return axios.request(options);
};

//  PUT request
export const apiPut = (endpoint, data, requiresAuth = true) => {
  const options = {
    method: "PUT",
    url: `${BASE_URL}${endpoint}`,
    data,
  };

  if (requiresAuth) {
    options.headers = {
      token: localStorage.getItem("userToken"),
    };
  }

  return axios.request(options);
};

//  DELETE request
export const apiDelete = (endpoint, requiresAuth = true) => {
  const options = {
    method: "DELETE",
    url: `${BASE_URL}${endpoint}`,
  };

  if (requiresAuth) {
    options.headers = {
      token: localStorage.getItem("userToken"),
    };
  }

  return axios.request(options);
};
