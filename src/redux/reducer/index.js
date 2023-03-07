import { combineReducers } from "redux";
import { AccountReducer } from "./accountReducer";
import { homeReducer } from "./homeReducer";
import { PhongReducer } from "./phongReducer";

const reducers = combineReducers({
    phong: PhongReducer,
    account: AccountReducer,
    home: homeReducer,
})

export default reducers;