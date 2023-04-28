import axios from "axios";
import { SAVE_STUDENT_DATA, FAIL_POST_DATA, GET_STUDENT_DATA, FAIL_STUDENT_DATA, EDIT_SAVE_DATA, FAIL_EDIT_DATA } from "../../../src/Component/Login/types";

export const savePostData = (data) => ({
    type: SAVE_STUDENT_DATA,
    payload: data
});

export const failPostData = (data) => ({
    type: FAIL_POST_DATA,
    payload: data
})

export const editSaveData = (data) => ({
    type: EDIT_SAVE_DATA,
    payload: data
})

export const getdbData = (data, total) => ({
    type: GET_STUDENT_DATA,
    payload: data,
    total: total
});

export const getErrorData = (data) => ({
    type: FAIL_STUDENT_DATA,
    payload: data
})

// export const failEditData = (data) = ({
//     type: FAIL_EDIT_DATA,
//     payload: data
// })
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

export const editSave = (data) => (dispatch) => {
    console.log('action edit save control', data);
    axios({
        method: "PUT",
        url: "http://localhost:3030/api/updatestudent",
        data: data,
        headers: {
            "x-token": '',
            'x-client-id': 1234,
            'Content-Type': 'application/json'
        }
    }).then((res) => {
        dispatch(editSaveData(res.data))
    }).catch((err) => {
        console.log('error', err)
        // dispatch(failEditData(err));
    })
}

export const getStudentData = (data) => (dispatch) => {
    console.log('get student Data');
    axios({
        method: 'POST',
        url: "http://localhost:3030/api/studentData",
        data: data,
        headers: {
            "x-token": '',
            'x-client-id': 1234,
            'Content-Type': 'application/json'
        },

    }).then(res => {
        console.log('result', res.data.total);
        const count =  Math.ceil(res.data.count / data.limit);
        console.log('data count',count);
        dispatch(getdbData(res.data, count))
    }).catch(err => {
        dispatch(getErrorData(err))
    })
}

export const deleteData = (id) => () => {
    console.log('id', id);
    console.log('get student Data');
    axios({
        method: 'DELETE',
        url: `http://localhost:3030/api/deletestudent/${id}`,
        headers: {
            "x-token": '',
            'x-client-id': 1234,
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log('delete', res.data)
        // dispatch(deletedbData(res.data))
    }).catch(err => {
        console.log('delete', err);
        // dispatch(deleteErrorData(err))
    })
}