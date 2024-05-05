import { loading } from "../actions/jobsActtions";
import { ActionTypes } from "../constants/actiontypes";



const intialState = {
    loading: false,
    jobs: []
}
export const jobReducer = (state = intialState, { type, jobs }) => {
    switch (type) {
        case ActionTypes.LOADING_PRODUCTS:

            return { ...state, jobs, loading: true };
        case ActionTypes.GET_PRODUCTS:
            console.log(jobs);

            return { ...state, jobs, loading: false };

        default:
            return state;
    }
}
export default jobReducer