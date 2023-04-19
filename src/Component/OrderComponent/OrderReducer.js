import { SAVE_STUDENT_DATA } from "../../../src/Component/Login/types";

const initialstate = {
    saveStudentdata: {}
}

const OrderReducer = (state = initialstate, action) => {

    const { payload } = action;

    switch (action.type) {
        case SAVE_STUDENT_DATA: {
            return {
                ...state,
                saveStudentdata: payload
            }
        }
        default: {
            return state
        }
    }
};

export default OrderReducer;