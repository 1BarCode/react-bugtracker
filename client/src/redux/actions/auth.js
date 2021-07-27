import { AUTH } from "../constants/actionTypes";
import * as api from "../../api/index";

export const signin = (formData, history) => async (dispatch) => {
  try {
    // log in the users ...
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, payload: data });

    history.push("/dashboard");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    // sign up the user
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, payload: data });

    history.push("/dashboard");
  } catch (error) {
    console.log(error);
  }
};
