import { combineReducers } from "redux";
import { paths } from "./path";
import { tree } from "./tree";

const rootReducer = combineReducers({
    paths,
    tree
});
export default rootReducer;
