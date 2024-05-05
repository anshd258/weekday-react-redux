import { loading } from "../actions/jobsActtions";
import { ActionTypes } from "../constants/actiontypes";



const intialState = {
    loading: false,
    jobs: []
}
export const jobReducer = (state = intialState, { type, jobs }) => {
    switch (type) {
        case ActionTypes.LOADING_PRODUCTS:
            console.group(state.jobs);


            return { ...state, loading: true };
        case ActionTypes.GET_PRODUCTS:
            console.log(jobs);
            var updatedjobs;
            if (state.jobs.length != 0) {
                updatedjobs = state.jobs.concat(jobs)
            } else if (jobs != null) {
                updatedjobs = jobs
            } else {
                updatedjobs = state.jobs;
            }

            return { ...state, jobs: updatedjobs, loading: false };
        default:
            return state;
    }
}
export default jobReducer