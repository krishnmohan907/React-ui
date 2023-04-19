import axios from "axios";
import { SAVE_STUDENT_DATA, FAIL_POST_DATA } from "../../../src/Component/Login/types";

export const savePostData = (data) => ({
    type: SAVE_STUDENT_DATA,
    payload: data
});

export const failPostData = (data) => ({
    type: FAIL_POST_DATA,
    payload: data
})

export const handleSave = (data) => (dispatch) => {
    console.log('data', data);
    axios({
        method: "POST",
        url: "http://localhost:3030/api/studentRegistation",
        data: data,
        headers: {
            "x-token": '',
            'x-client-id': 1234,
            'Content-Type': 'application/json'
        },
    }).then((res) => {
        dispatch(savePostData(res.data))
    }).catch((err) => {
        dispatch(failPostData(err));
    })
}