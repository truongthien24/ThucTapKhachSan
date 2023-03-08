import { combineReducers } from "redux";
import { AccountReducer } from "./accountReducer";
import { AreaReducer } from "./areaReducer";
import { homeReducer } from "./homeReducer";
import { PhongReducer } from "./phongReducer";

const reducers = combineReducers({
    phong: PhongReducer,
    account: AccountReducer,
    home: homeReducer,
    area: AreaReducer
})

export default reducers;