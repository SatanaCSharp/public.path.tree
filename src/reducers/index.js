import { combineReducers } from "redux";
import { path } from "./path";
import { tree } from "./tree";

const rootReducer = combineReducers({
    path,
    tree
});
export default rootReducer;