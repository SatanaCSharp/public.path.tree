import { takeEvery, call, put } from "redux-saga/effects";
import {
    pathFulfilled,
    pathRejected,
    pathShowRejected,
    pathShowFulfilled,
    pathCreateFulfilled,
    pathCreateRejected,
    pathUpdateFulfilled,
    pathUpdateRejected,
    pathDeleteFulfilled,
    pathDeleteRejected
 } from '../actions/pathActionCreator';
import {
    PATH_PENDING,
    PATH_CREATE_PENDING,
    PATH_SHOW_PENDING,
    PATH_UPDATE_PENDING,
    PATH_DELETE_PENDING,
} from '../constants/actionTypes';
import {
    getPathsRequest,
    getPathRequest,
    postPathRequest,
    putPathRequest,
    deletePathRequest
} from "../services/requestService";


function* getPaths() {
    try {
        const path = yield call(async()=> await getPathsRequest());
        yield put(pathFulfilled(path));
    }catch (err) {
        yield put(pathRejected());
    }
}
function* getPath(action) {
    try {
        const { payload: { pathId }} = action;
        const paths = yield call(async()=> await getPathRequest(pathId));
        yield put(pathShowFulfilled(paths));
    }catch (err) {
        yield put(pathShowRejected());
    }
}
function*  createPath(action) {
    try {
        const { payload: { name }} = action;
        const paths = yield call(async()=> await postPathRequest({ name }));
        yield put(pathCreateFulfilled(paths));
    }catch (err) {
        yield put(pathCreateRejected());
    }
}
function*  updatePath(action) {
    try {
        const { payload: {pathId, name }} = action;
        const paths = yield call(async()=> await putPathRequest({pathId, name }));
        yield put(pathUpdateFulfilled(paths));
    }catch (err) {
        yield put(pathUpdateRejected());
    }
}
function*  deletePath(action) {
    try {
        const { payload: {pathId}} = action;
        const paths = yield call(async()=> await deletePathRequest(pathId));
        console.log(paths);
        yield put(pathDeleteFulfilled(paths));
    }catch (err) {
        yield put(pathDeleteRejected());
    }
}

export default function* pathsRootSaga() {
    yield takeEvery(PATH_PENDING, getPaths);
    yield takeEvery(PATH_SHOW_PENDING, getPath);
    yield takeEvery(PATH_CREATE_PENDING, createPath);
    yield takeEvery(PATH_UPDATE_PENDING, updatePath);
    yield takeEvery(PATH_DELETE_PENDING, deletePath);
}
