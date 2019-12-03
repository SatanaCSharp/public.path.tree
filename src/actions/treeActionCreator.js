import { TREE_PENDING, TREE_FULFILLED, TREE_REJECTED } from "../constants/actionTypes";

export const treePending = (payload) =>({
    type: TREE_PENDING,
    isLoading: true,
    payload
});

export const treeFulfilled = (payload) =>({
    type: TREE_FULFILLED,
    isLoading: false,
    payload
});

export const treeRejected = (payload) =>({
    type: TREE_REJECTED,
    isLoading: false,
    payload
});
