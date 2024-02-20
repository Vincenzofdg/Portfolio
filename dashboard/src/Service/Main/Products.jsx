import api from "./api";

import RequestError from "../../Hooks/RequestError";

const ENDPOINT = "/products";

export const getAll = async (token) => {
  try {
    const { data } = await api.get(ENDPOINT, {
      headers: { 'Authorization': token }
    });
    return data;
  } catch (error) {
    const errorResponse = RequestError(error);
    return errorResponse;
  }
};