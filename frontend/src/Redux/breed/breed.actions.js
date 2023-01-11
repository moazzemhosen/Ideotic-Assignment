import axios from "axios";
import { GET_BREEDS_ERROR, GET_BREEDS_LOADING, GET_BREEDS_SUCCESS } from "./breed.types";


export const getBreedsAPI = () => (dispatch) => {
  dispatch({ type: GET_BREEDS_LOADING });
  axios
    .get("https://dog.ceo/api/breeds/image/random/3")
    .then((r) => {
      dispatch({ type: GET_BREEDS_SUCCESS, payload: r.data });
    })
    .catch(() => {
      dispatch({ type: GET_BREEDS_ERROR });
    });
};
