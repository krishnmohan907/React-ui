import { SAVE_STUDENT_DATA, GET_STUDENT_DATA, EDIT_SAVE_DATA } from "../../../src/Component/Login/types";

const initialstate = {
    saveStudentdata: {},
    StudentRecords: {},
    StudentEditRecords: {}, 
    total: 0
}

const OrderReducer = (state = initialstate, action) => {
   
    const { payload,total } = action;
    console.log('payload',payload);
    switch (action.type) {
        case SAVE_STUDENT_DATA: {
            return {
                ...state,
                saveStudentdata: payload
            }
        }
        case GET_STUDENT_DATA: {
            return {
                ...state,
                StudentRecords: payload,
                total:total
            }
        }
        case EDIT_SAVE_DATA: {
            return {
                ...state,
                StudentEditRecords: payload
            }
        }
        default: {
            return state
        }
    }
};

export default OrderReducer;