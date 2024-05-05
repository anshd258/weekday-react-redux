import axios from "axios"
import { ActionTypes, baseURL } from "../constants/actiontypes"


export const getProducts = ({ offset, limit }) => async (dispatch) => {
    const response = await axios.post(baseURL, { "offset": offset, "limit": limit }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    console.log(response.data.jdList);

    dispatch({
        type: ActionTypes.GET_PRODUCTS,
        jobs: response.data.jdList
    })
}
export const loading = () => {
    return {
        type: ActionTypes.LOADING_PRODUCTS,
    }
}