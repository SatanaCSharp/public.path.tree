import { TREE_FULFILLED } from '../constants/actionTypes';

export const tree = (state={}, {type, payload}) => {
    switch(type) {
        case TREE_FULFILLED:
            return {
                ...state,
                ...payload
            };
        default:
            return state;
    }
}