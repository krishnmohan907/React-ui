// import Serices from "../Services";
import { GET_DATA, ERROR_STUDENT_FAILUAR } from "../../Component/Login/types";

import axios from "axios";

export const getUSer = (data) => ({
  type: GET_DATA,
  payload: data,
});

export const StudentFailuarFailure = () => ({
  type: ERROR_STUDENT_FAILUAR,
});

export const getStudentDataData = () => (dispatch) => {
    console.log('sign up data')
  axios({
    method: "GET",
    url: `http://localhost:3030/api/getuserdata`,
    headers: {
      "x-token": '',
      'x-client-id': 1234,
      'Content-Type': 'application/json'
    },
  })
    .then((res) => {
      if (res && res.data) {
        console.log('response data',res);
        dispatch(getUSer(res.data));
      }
    })
    .catch((err) => {
      dispatch(StudentFailuarFailure());
    });
};
