import { CREATE_TUTORIAL } from "./types";

const initialState = {
  studentData: {}
};

const LoginReducer = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case CREATE_TUTORIAL: {
      return {
        ...state,
        studentData: payload
      };
    }
    default: {
      return state
    }
  }

};
export default LoginReducer;