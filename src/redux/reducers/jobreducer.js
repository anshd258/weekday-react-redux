import { loading } from "../actions/jobsActtions";
import { ActionTypes } from "../constants/actiontypes";



const intialState = {
    loading: false,
    jobs: []
}
export const jobReducer = (state = intialState, { type, jobs, value }) => {
    switch (type) {
        case ActionTypes.LOADING_PRODUCTS:
            console.group(state.jobs);


            return { ...state, loading: true };
        case ActionTypes.GET_PRODUCTS:

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

            const uniqueExpValues = Array.from(uniqueExperienceSet).sort(function (a, b) {
                return a - b;
            });
            const uniqueSalValues = Array.from(uniqueSalarySet).sort(function (a, b) {
                return a - b;
            });
            const uniqueLocationval = Array.from(uniqueLocation)
            const uniqueRolVal = Array.from(uniqueRole)
            var updatedjobs;
            if (state.jobs.length !== 0) {
                updatedjobs = state.jobs.concat(jobs)
            } else if (jobs !== null) {
                updatedjobs = jobs
            } else {
                updatedjobs = state.jobs;
            }

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
        case ActionTypes.CHANGE_EXP:

            let selectedExpJobs = []
            if (value != "All") {
                console.log(state.storejobs);
                console.log(value);
                selectedExpJobs = state.storejobs.filter(item => item.minExp === parseInt(value) || item.maxExp === parseInt(value));
                console.log(selectedExpJobs);

            } else if (value == "All") {
                selectedExpJobs = state.storejobs
            }


            return { ...state, jobs: selectedExpJobs, loading: false };
        case ActionTypes.CHANGE_SALARY:

            let selectedSalJobs = []
            if (value != "All") {
                console.log(state.storejobs);
                console.log(value);
                selectedSalJobs = state.storejobs.filter(item => item.minJdSalary === parseInt(value) || item.maxJdSalary === parseInt(value));
                console.log(selectedSalJobs);

            } else if (value == "All") {
                selectedSalJobs = state.storejobs
            }


            return { ...state, jobs: selectedSalJobs, loading: false };
        case ActionTypes.COMPANY_NAME:

            let selectedCompanyJobs = []
            if (value != "All") {
                console.log(state.storejobs);
                console.log(value);
                selectedCompanyJobs = state.storejobs.filter(item => item.companyName.toLowerCase().includes(value));
                console.log(selectedCompanyJobs);

            } else if (value == "All") {
                selectedCompanyJobs = state.storejobs
            }


            return { ...state, jobs: selectedCompanyJobs, loading: false };


        case ActionTypes.CHANGE_LOCATION:

            let selectedLocJobs = []
            if (value != "All") {
                console.log(state.storejobs);
                console.log(value);
                selectedLocJobs = state.storejobs.filter(item => item.location === value);
                console.log(selectedLocJobs);

            } else if (value == "All") {
                selectedLocJobs = state.storejobs
            }


            return { ...state, jobs: selectedLocJobs, loading: false };
        case ActionTypes.CHANGE_ROLE:

            let selectedRoleJobs = []
            if (value != "All") {
                console.log(state.storejobs);
                console.log(value);
                selectedRoleJobs = state.storejobs.filter(item => item.jobRole === value);
                console.log(selectedRoleJobs);

            } else if (value == "All") {
                selectedRoleJobs = state.storejobs
            }


            return { ...state, jobs: selectedRoleJobs, loading: false };
        default:
            return state;
    }
}
export default jobReducer