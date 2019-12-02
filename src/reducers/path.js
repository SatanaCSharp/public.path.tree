import {
    PATH_FULFILLED,
    PATH_CREATE_FULFILLED,
    PATH_UPDATE_FULFILLED,
    PATH_SHOW_FULFILLED,
} from '../constants/actionTypes';

export const path = (state={}, {type, payload}) => {
    switch(type) {
        case PATH_FULFILLED:
            return {
                ...state,
                ...payload
            };
        case PATH_CREATE_FULFILLED:
            return {
                ...state,
                ...payload
            };
        case PATH_SHOW_FULFILLED:
            return {
                ...state,
                ...payload
            };
        case PATH_UPDATE_FULFILLED:
            return {
                ...state,
                ...payload
            };

        case PATH_DELETE_FULFILLED:
            return {
                ...state,
                ...payload
            };

        default:
            return state;
    }
}