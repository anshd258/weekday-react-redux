import { useState, useEffect, } from "react";
import "../style/jobsection.css"
import loadingGif from '../loading.gif';
import JobCard from './jobcard'
import { getProducts, loading } from "../redux/actions/jobsActtions"
import { useDispatch, useSelector } from 'react-redux'
function JobSection() {
    const [offset, setoffset] = useState(0);
    const job = useSelector((state) => state.alljobs);

    const dispatch = useDispatch();
    console.log(job);
    const handleScrollEnd = async () => {
        try {
            if (
                window.innerHeight + document.documentElement.scrollTop + 1 >=
                document.documentElement.scrollHeight
            ) {
                setoffset(offset + 1)
                dispatch(loading())

                dispatch(getProducts(offset, 10))
                console.log("reached end");
            }
        } catch (error) {
            console.log(error);
        }
    }




    useEffect(() => {
        window.addEventListener("scroll", handleScrollEnd)
        dispatch(loading())
        dispatch(getProducts(offset, 10))
        return () => {

        };
    }, []);



    return (
        <div className='job-grid'>
            {
                (job.loading === true && job.jobs.length === 0) ? (
                    <img className="loading" src={loadingGif} alt="Loading..." />
                ) : <> {job.jobs.map((e) => (
                    <JobCard
                        key={e.id} // Assuming each job has a unique id
                        companyName={e.companyName}
                        currency={e.salaryCurrencyCode}
                        desc={e.jobDetailsFromCompany}
                        link={e.jdLink}
                        location={e.location}
                        logoUrl={e.logoUrl}
                        maxSal={e.maxJdSalary}
                        minExp={e.minExp}
                        minSal={e.minJdSalary}
                        role={e.jobRole}
                    />
                ))}
                    {job.loading === true ? <img className="loading" height={170} width={150} src={loadingGif} alt="Loading..." /> : null}
                </>

            }


        </div>
    )
}

export default JobSection