import {TREE_FULFILLED, TREE_PENDING} from '../constants/actionTypes';

export const tree = (state={}, {type, payload, isLoading}) => {
    switch(type) {
        case TREE_PENDING:
            return {
                isLoading
            };
        case TREE_FULFILLED:
            return {
                ...state,
                isLoading,
                ...payload
            };
        default:
            return state;
    }
};
