import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import "../style/dropdown.css"
const DropDownButton = ({ text, content, changeHandler }) => {

    const [open, setopen] = useState(false);
    const toggler = () => {
        setopen((open) => !open);


    };

    const handleSelectChange = (event) => {
        console.log(event.target.value);
        changeHandler(event.target.value);
    };

    return (
        <div  >
            <div className={`dropdownbutton ${open ? "dropdownbuttonopen" : null}`}>
                <select className="text" onChange={handleSelectChange} onFocus={toggler} onBlur={toggler} >
                    <option value="" disabled selected hidden>{text}</option>
                    {content.map((value, index) => (<option key={index} value={value}>{value}</option>))}
                </select>
                <span className="icon">
                    {open ? <FaChevronUp /> : <FaChevronDown />}
                </span>
            </div>
            {/* {open ? <div className={`${open ? "opencontent" : null}`}>
                {content.map((value) => (<div className='content-item'>
                    {value}
                </div>))}
            </div> : null} */}
        </div>
    )
}

export default DropDownButton