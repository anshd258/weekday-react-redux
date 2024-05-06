import { loading } from "../actions/jobsActtions";
import { ActionTypes } from "../constants/actiontypes";



const intialState = {
    loading: false,
    jobs: []
}
export const jobReducer = (state = intialState, { type, jobs, value }) => {

    switch (type) {

        //for loading in between the products are loaded
        case ActionTypes.LOADING_PRODUCTS:



            return { ...state, loading: true };

        // to get products from the api using thunk
        case ActionTypes.GET_PRODUCTS:
            // to create set of distinct values for filters
            const { uniqueExpValues, uniqueSalValues, uniqueLocationval, uniqueRolVal } = setMaker(jobs);
            // to concat the new jobs coming after making a post request with required offset

            var updatedjobs = jobSetter(state, jobs);

            return {
                ...state,
                jobs: updatedjobs,
                storejobs: updatedjobs,
                loading: false,
                uniqueExpValues: uniqueExpValues,
                uniqueSalValues: uniqueSalValues,
                uniqueLocationval: uniqueLocationval,
                uniqueRolVal: uniqueRolVal


            };
        // to hande exp change events
        case ActionTypes.CHANGE_EXP:

            let selectedExpJobs = []
            if (value != "All") {

                //filters the exp to match the value for both min and max
                selectedExpJobs = state.storejobs.filter(item => item.minExp === parseInt(value) || item.maxExp === parseInt(value));


            } else if (value == "All") {
                selectedExpJobs = state.storejobs
            }


            return { ...state, jobs: selectedExpJobs, loading: false };

        // to hande salary change events
        case ActionTypes.CHANGE_SALARY:

            let selectedSalJobs = []
            if (value != "All") {
                //filters the salary to match the value for both min and max
                selectedSalJobs = state.storejobs.filter(item => item.minJdSalary === parseInt(value) || item.maxJdSalary === parseInt(value));


            } else if (value == "All") {
                selectedSalJobs = state.storejobs
            }


            return { ...state, jobs: selectedSalJobs, loading: false };

        // to hande company change events
        case ActionTypes.COMPANY_NAME:

            let selectedCompanyJobs = []
            if (value != "All") {
                //filter for company name filter
                selectedCompanyJobs = state.storejobs.filter(item => item.companyName.toLowerCase().includes(value));


            } else if (value == "All") {
                selectedCompanyJobs = state.storejobs
            }


            return { ...state, jobs: selectedCompanyJobs, loading: false };

        // to hande location change events
        case ActionTypes.CHANGE_LOCATION:

            let selectedLocJobs = []
            if (value != "All") {
                //company location filter
                selectedLocJobs = state.storejobs.filter(item => item.location === value);


            } else if (value == "All") {
                selectedLocJobs = state.storejobs
            }


            return { ...state, jobs: selectedLocJobs, loading: false };

        // to hande role change events
        case ActionTypes.CHANGE_ROLE:

            let selectedRoleJobs = []
            if (value != "All") {
                //role filter
                selectedRoleJobs = state.storejobs.filter(item => item.jobRole === value);


            } else if (value == "All") {
                selectedRoleJobs = state.storejobs
            }


            return { ...state, jobs: selectedRoleJobs, loading: false };
        default:
            return state;
    }
}
export default jobReducer

function jobSetter(state, jobs) {
    if (state.jobs.length !== 0) {
        return state.jobs.concat(jobs);
    } else if (jobs !== null) {
        return jobs;
    } else {
        return state.jobs; // sets the jobs if no jobs are ther or null
    }

}

function setMaker(jobs) {
    const uniqueExperienceSet = new Set();
    const uniqueSalarySet = new Set();
    const uniqueLocation = new Set();
    const uniqueRole = new Set();

    jobs.forEach(job => {
        if (job.minExp != null) {
            uniqueExperienceSet.add(job.minExp);
        } if (job.maxExp != null) {
            uniqueExperienceSet.add(job.maxExp);
        }
        if (job.minJdSalary != null) {
            uniqueSalarySet.add(job.minJdSalary);
        } if (job.maxJdSalary != null) {
            uniqueSalarySet.add(job.maxJdSalary);
        }
        if (job.location != null) {
            uniqueLocation.add(job.location);
        }
        if (job.jobRole != null) {
            uniqueRole.add(job.jobRole);
        }
    });
    // converting them to array
    const uniqueExpValues = Array.from(uniqueExperienceSet).sort(function (a, b) {
        return a - b;
    });
    const uniqueSalValues = Array.from(uniqueSalarySet).sort(function (a, b) {
        return a - b;
    });
    const uniqueLocationval = Array.from(uniqueLocation);
    const uniqueRolVal = Array.from(uniqueRole);
    return { uniqueExpValues, uniqueSalValues, uniqueLocationval, uniqueRolVal };
}
