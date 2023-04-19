// import Serices from "../Services";
import { CREATE_TUTORIAL, ERROR_STUDENT_FAILUAR,LOGIN_DETAILS,ERROR_LOGIN_FAIL } from "./types.js";

import axios from "axios";

export const saveStudent = (data) => ({
  type: CREATE_TUTORIAL,
  payload: data,
});

export const StudentFailuarFailure = (data) => ({
  type: ERROR_STUDENT_FAILUAR,
  payload: data
});

export const saveLogindetails = (data) => ({
  type: LOGIN_DETAILS,
  payload: data
})

export const loginFail = (data) => ({
  type: ERROR_LOGIN_FAIL,
  payload: data
})

export const saveStudentData = (data) => (dispatch) => {
  axios({
    method: "POST",
    url: `http://localhost:3030/api/signup`,
    data: data,
    headers: {
      "x-token": '',
      'x-client-id': 1234,
      'Content-Type': 'application/json'
    },
  })
    .then((res) => {
      if (res && res.data) {
        console.log('response data', res);
        dispatch(saveStudent(res.data));
      }
    })
    .catch((err) => {
      dispatch(StudentFailuarFailure());
    });
};

export const saveLogindata = (data) => (dispatch) => {
  axios({
    method: "POST",
    url: 'http://localhost:3030/api/login',
    data: data,
    headers: {
      "x-token": '',
      'x-client-id': 1234,
      'Content-Type': 'application/json'
    },
  }).then((res) => {
    if (res && res.data) {
      console.log('response data', res);
      dispatch(saveLogindetails(res.data))
    }
  }).catch((err) => {
    dispatch(loginFail());
  })
}