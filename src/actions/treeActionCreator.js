import { TREE_PENDING, TREE_FULFILLED, TREE_REJECTED } from "../constants/actionTypes";

export const treePending = (payload) =>({
    type: TREE_PENDING,
    payload
});

export const treeFulfilled = (payload) =>({
    type: TREE_FULFILLED,
    payload
});

export const treeRejected = (payload) =>({
    type: TREE_REJECTED,
    payload
});