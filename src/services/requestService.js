import axios from "axios";
import config from "../config";

const getPathsRequest = async () => {
    const getPathsResponse = await axios.get(`${config.apiUrl}/paths`);
    return getPathsResponse;
}
const getPathRequest = async (pathId) => {
    const getPathResponse = await axios.get(`${config.apiUrl}/paths/${pathId}`);
    return getPathResponse;
}
const postPathRequest = async ({name}) => {
    const postPathResponse = await axios.post(`${config.apiUrl}/paths`, {
        name
    });
    return postPathResponse;
}
const putPathRequest = async ({pathId, name }) => {
    const putPathResponse = await axios.put(`${config.apiUrl}/paths/${pathId}`, {
        name
    });
    return putPathResponse;
}
const deletePathRequest = async (pathId) => {
    const deletePathResponse = await axios.delete(`${config.apiUrl}/paths/${pathId}`);
    return deletePathResponse;
}

const getTreeRequest = async (pathId) => {
    const getTreeResponse = await axios.get(`${config.apiUrl}/trees/paths/${pathId}`);
    return getTreeResponse;
}
export {
    getPathsRequest,
    getPathRequest,
    postPathRequest,
    putPathRequest,
    deletePathRequest,
    getTreeRequest
}
