import { useState, useEffect, useRef } from "react";
import "../style/jobsection.css"
import loadingGif from '../loading.gif';
import JobCard from './jobcard'
import { getProducts, loading } from "../redux/actions/jobsActtions"
import { useDispatch, useSelector } from 'react-redux'
function JobSection() {


   


    useEffect(() => {
        
        dispatch(loading())
        dispatch(getProducts(0, 10))
        return () => {
           
        };
    }, []);



    return (
        <div className='job-grid' >
            {job.loading == true ? (<img src={loadingGif} alt="Loading..." />) :
                job.jobs.map((e) => (<JobCard companyName={e.companyName} currency={e.salaryCurrencyCode}
                    desc={e.jobDetailsFromCompany} link={e.jdLink} location={e.location} logoUrl={e.logoUrl}
                    maxSal={e.maxJdSalary} minExp={e.minExp} minSal={e.minJdSalary} role={e.jobRole}
                />))
            }


        </div>
    )
}

export default JobSection