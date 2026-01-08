import axios from "axios";
export async function authAPI(values, endpoint) {
  try {
    let { data } = await axios.post(
      `https://linked-posts.routemisr.com/users/${endpoint}`,
      values
    );
    return data;
  } catch (error) {
    return error.response.data.error;
  }
}
