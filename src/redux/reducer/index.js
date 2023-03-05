import { combineReducers } from "redux";
import { PhongReducer } from "./phongReducer";

const reducers = combineReducers({
    phong: PhongReducer
})

export default reducers;