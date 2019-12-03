import { TREE_FULFILLED } from '../constants/actionTypes';

export const tree = (state={}, {type, payload, isLoading}) => {
    switch(type) {
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
