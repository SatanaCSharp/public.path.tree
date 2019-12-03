import {
    PATH_PENDING,
    PATH_FULFILLED,
    PATH_REJECTED,
    PATH_CREATE_PENDING,
    PATH_CREATE_FULFILLED,
    PATH_CREATE_REJECTED,
    PATH_SHOW_PENDING,
    PATH_SHOW_FULFILLED,
    PATH_SHOW_REJECTED,
    PATH_UPDATE_PENDING,
    PATH_UPDATE_FULFILLED,
    PATH_UPDATE_REJECTED,
    PATH_DELETE_PENDING,
    PATH_DELETE_FULFILLED,
    PATH_DELETE_REJECTED
} from '../constants/actionTypes';

export const pathPending = (payload) =>({
    type: PATH_PENDING,
    isLoading: true,
    payload
});

export const pathFulfilled = (payload) =>({
    type: PATH_FULFILLED,
    isLoading: false,
    payload
});

export const pathRejected = (payload) =>({
    type: PATH_REJECTED,
    isLoading: false,
    payload
});

export const pathCreatePending = (payload) =>({
    type: PATH_CREATE_PENDING,
    isLoading: true,
    payload
});

export const pathCreateFulfilled = (payload) =>({
    type: PATH_CREATE_FULFILLED,
    isLoading: false,
    payload
});

export const pathCreateRejected = (payload) =>({
    type: PATH_CREATE_REJECTED,
    isLoading: false,
    payload
});


export const pathShowPending = (payload) =>({
    type: PATH_SHOW_PENDING,
    isLoading: true,
    payload
});

export const pathShowFulfilled = (payload) =>({
    type: PATH_SHOW_FULFILLED,
    isLoading: false,
    payload
});

export const pathShowRejected = (payload) =>({
    type: PATH_SHOW_REJECTED,
    isLoading: false,
    payload
});

export const pathUpdatePending = (payload) =>({
    type: PATH_UPDATE_PENDING,
    isLoading: true,
    payload
});

export const pathUpdateFulfilled = (payload) =>({
    type: PATH_UPDATE_FULFILLED,
    isLoading: false,
    payload
});

export const pathUpdateRejected = (payload) =>({
    type: PATH_UPDATE_REJECTED,
    isLoading: false,
    payload
});

export const pathDeletePending = (payload) =>({
    type: PATH_DELETE_PENDING,
    isLoading: true,
    payload
});

export const pathDeleteFulfilled = (payload) =>({
    type: PATH_DELETE_FULFILLED,
    isLoading: false,
    payload
});

export const pathDeleteRejected = (payload) =>({
    type: PATH_DELETE_REJECTED,
    isLoading: false,
    payload
});
