import { takeEvery, call, put } from "redux-saga/effects";
import { TREE_PENDING } from "../constants/actionTypes";
import { treeFulfilled, treeRejected } from "../actions/treeActionCreator";
import { getTreeRequest } from "../services/requestService";

function* getTree(action) {
    try {
        const { payload: { pathId }} = action;
        const tree = yield call(async()=> await getTreeRequest(pathId));
        yield put(treeFulfilled(tree));
    }catch (err) {
        yield put(treeRejected());
    }
}

export default function* treesRootSaga() {
    yield takeEvery(TREE_PENDING, getTree);

}