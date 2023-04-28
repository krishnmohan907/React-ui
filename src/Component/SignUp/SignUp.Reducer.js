import { GET_DATA } from "./../../Component/Login/types";

const initialState = {
  getData: {}
};

const SignReducer = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case GET_DATA: {
      return {
        ...state,
        getData: payload
      };
    }
    default: {
      return state
    }
  }

};
export default SignReducer;