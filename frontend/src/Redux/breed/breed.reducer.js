import { GET_BREEDS_ERROR, GET_BREEDS_LOADING, GET_BREEDS_SUCCESS } from "./breed.types";


const initalState = {
  getBreeds: {
    loading: false,
    error: false,
  },
  data: [],
};
export const breedReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case GET_BREEDS_LOADING: {
      return {
        ...state,
        getBreeds: {
          ...state.getBreeds,
          loading: true,
          error: false,
        },
      };
    }
    case GET_BREEDS_SUCCESS: {
      return {
        ...state,
        getBreeds: {
          ...state.getBreeds,
          loading: false,
          error: false,
        },
        data: payload,
      };
    }
    case GET_BREEDS_ERROR: {
      return {
        ...state,
        getBreeds: {
          ...state.getBreeds,
          loading: false,
          error: true,
        },
      };
    }
    default: {
      return state;
    }
  }
};
