import React from 'react'
import "../style/filtertile.css"
import DropDownButton from './dropdown';
function FilterTiles() {
    return (
        <div className='filterbox'>
            <DropDownButton content={["val", "nalsa", "pallas"]} text={"Role"} />
            <DropDownButton content={["val", "nalsa", "pallas"]} text={"Number Of Employees"} />
            <DropDownButton content={["val", "nalsa", "pallas"]} text={"Experience"} />
            <DropDownButton content={["val", "nalsa", "pallas"]} text={"Remote"} />
            <DropDownButton content={["val", "nalsa", "pallas"]} text={"Minimum Base pay Salary"} />
        </div>
    )
}

export default FilterTiles