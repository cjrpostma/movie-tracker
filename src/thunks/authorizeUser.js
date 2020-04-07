import { loginUser } from "../actions";
import { postUser } from "../apiCalls/postUser";

export const authorizeUser = (loginData) => {
  return async (dispatch) => {
    try {
      console.log(loginData);
    } catch(error) {

    }
  }
}
