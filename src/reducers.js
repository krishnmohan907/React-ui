import { combineReducers } from "redux";
import LoginReducer from './Component/Login/Login.Reducer';
import SignReducer from "./Component/SignUp/SignUp.Reducer";
import OrderReducer from "./Component/OrderComponent/OrderReducer";


export default combineReducers({
    LoginReducer,
    SignReducer,
    OrderReducer
})