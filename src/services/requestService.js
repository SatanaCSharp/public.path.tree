import axios from "axios";
import config from "../config";
import mapResponseToArray from "./mappers/mapResponseToArray";
const getPathsRequest = async () => {
    const getPathsResponse = await axios.get(`${config.apiUrl}/paths`);
    return mapResponseToArray(getPathsResponse);
};
const getPathRequest = async (pathId) => {
    const getPathResponse = await axios.get(`${config.apiUrl}/paths/${pathId}`);
    return mapResponseToArray(getPathResponse);
};
const postPathRequest = async ({name}) => {
    const postPathResponse = await axios.post(`${config.apiUrl}/paths`, {
        name
    });
    return mapResponseToArray(postPathResponse);
};
const putPathRequest = async ({pathId, name }) => {
    const putPathResponse = await axios.put(`${config.apiUrl}/paths/${pathId}`, {
        name
    });
    return mapResponseToArray(putPathResponse);
};
const deletePathRequest = async (pathId) => {
    const deletePathResponse = await axios.delete(`${config.apiUrl}/paths/${pathId}`);
    return mapResponseToArray(deletePathResponse);
};

const getTreeRequest = async (pathId) => {
    const getTreeResponse = await axios.get(`${config.apiUrl}/trees/paths/${pathId}`);
    return mapResponseToArray(getTreeResponse);
};
export {
    getPathsRequest,
    getPathRequest,
    postPathRequest,
    putPathRequest,
    deletePathRequest,
    getTreeRequest
}
