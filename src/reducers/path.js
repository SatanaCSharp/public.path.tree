import {
    PATH_FULFILLED,
    PATH_CREATE_FULFILLED,
    PATH_UPDATE_FULFILLED,
    PATH_SHOW_FULFILLED,
    PATH_DELETE_FULFILLED,
    PATH_PENDING,
    PATH_CREATE_PENDING, PATH_DELETE_PENDING, PATH_SHOW_PENDING, PATH_UPDATE_PENDING,
} from '../constants/actionTypes';

export const paths = (state={}, {type,  payload, isLoading}) => {
    switch(type) {
        case PATH_PENDING:
            return {
                ...state,
                isLoading
            };
        case PATH_FULFILLED:
            return {
                ...state,
                isLoading,
                ...payload
            };
        case PATH_CREATE_PENDING:
            return {
                ...state,
                isLoading
            };
        case PATH_CREATE_FULFILLED:
            return {
                ...state,
                isLoading,
                ...payload
            };
        case PATH_SHOW_PENDING:
            return {
                ...state,
                isLoading
            };
        case PATH_UPDATE_PENDING:
            return {
                ...state,
                isLoading
            };
        case PATH_SHOW_FULFILLED:
            return {
                ...state,
                isLoading,
                ...payload
            };
        case PATH_UPDATE_FULFILLED:
            return {
                ...state,
                isLoading,
                ...payload
            };

        case PATH_DELETE_PENDING:
            return {
                ...state,
                isLoading
            };
        case PATH_DELETE_FULFILLED:
            return {
                isLoading,
                ...payload
            };
        default:
            return state;
    }
};
