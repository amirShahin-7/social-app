import axios from "axios";
import { toast } from "react-toastify";
export async function logUser(values) {
  try {
    let { data } = await axios.post(
      `https://linked-posts.routemisr.com/users/signin`,
      values
    );
    return data;
  } catch (error) {
    toast.error(error.response.data.error);
    return error.response.data.error;
  }
}

export async function addUser(values) {
  try {
    let { data } = await axios.post(
      `https://linked-posts.routemisr.com/users/signup`,
      values
    );
    return data;
  } catch (error) {
    toast.error(error.response.data.error);
    return error.response.data.error;
  }
}
