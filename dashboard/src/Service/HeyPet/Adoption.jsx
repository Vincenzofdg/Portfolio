import api from "./api";

const ENDPOINT = '/adoptions'

export const list = async (token) => {  
  try {
    const { data } = await api.get(
      ENDPOINT,
      {
        headers: { 'Authorization': token }
      }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default {
  list
}