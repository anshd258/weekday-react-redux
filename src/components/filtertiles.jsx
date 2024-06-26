import React from 'react'
import loadingGif from '../loading.gif';
import "../style/filtertile.css"
import DropDownButton from './dropdown';
import InputField from './inputfield';
import { useDispatch, useSelector } from 'react-redux';
import { changeCompany, changeExp, changeLocation, changeRole, changeSalary } from '../redux/actions/jobsActtions';
function FilterTiles() {
    const job = useSelector((state) => state.alljobs);
    const dispatch = useDispatch();




    return (
        <div className='filterbox'>
            {job.loading ? (<img className="loading" src={loadingGif} alt="Loading..." />) : (<>
                <DropDownButton key={1}
                    changeHandler={(value) => dispatch(changeRole({ value: value }
                    ))}

                    content={["All"].concat(job.uniqueRolVal)} text={"Role"} />
                <DropDownButton key={2}
                    changeHandler={(value) => dispatch(changeExp({ value: value }
                    ))}
                    content={["All"].concat(job.uniqueExpValues)} text={"Experience"} />
                <DropDownButton key={3}
                    changeHandler={(value) => dispatch(changeLocation({ value: value }
                    ))}
                    content={["All"].concat(job.uniqueLocationval)} text={"Remote"} />
                <DropDownButton key={4}
                    changeHandler={(value) => dispatch(changeSalary({ value: value }
                    ))}
                    content={["All"].concat(job.uniqueSalValues)} text={"Minimum Base pay Salary"} />
                <InputField changeHandler={(value) => dispatch(changeCompany({ value: value }
                ))} placeholder={"Search Company Name"} />
            </>)}
        </div>
    )
}

export default FilterTiles