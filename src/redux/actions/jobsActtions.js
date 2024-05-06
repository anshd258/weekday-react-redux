import axios from "axios"
import { ActionTypes, baseURL } from "../constants/actiontypes"

//used thunk  to handle async actions
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

export const changeExp = ({ value }) => {
    return {
        type: ActionTypes.CHANGE_EXP,
        value: value
    }

}
export const changeRole = ({ value }) => {
    return {
        type: ActionTypes.CHANGE_ROLE,
        value: value
    }

}
export const changeLocation = ({ value }) => {
    return {
        type: ActionTypes.CHANGE_LOCATION,
        value: value
    }

}
export const changeSalary = ({ value }) => {
    return {
        type: ActionTypes.CHANGE_SALARY,
        value: value
    }

}
export const changeCompany = ({ value }) => {
    return {
        type: ActionTypes.COMPANY_NAME,
        value: value
    }

}

export const loading = () => {
    return {
        type: ActionTypes.LOADING_PRODUCTS,
    }
}