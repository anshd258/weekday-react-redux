import React from 'react'
import "../style/jobsection.css"
import JobCard from './jobcard'
function JobSection() {
    return (
        <div className='job-grid'>
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />

        </div>
    )
}

export default JobSection