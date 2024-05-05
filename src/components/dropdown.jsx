import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import "../style/dropdown.css"
const DropDownButton = ({ text, content }) => {

    const [open, setopen] = useState(false);
    const toggler = () => {
        setopen((open) => !open);
    }
    return (
        <div  >
            <div className={`dropdownbutton ${open ? "dropdownbuttonopen" : null}`} onFocus={toggler} onBlur={toggler}>
                <span className='text' role='textbox' contentEditable onChange={() => { }}>{text}</span>
                <span className="divider"> </span>
                <span className='icon'> {
                    open ? <FaChevronUp /> : <FaChevronDown />
                }
                </span>

            </div>
            {open ? <div className={`${open ? "opencontent" : null}`}>
                {content.map((value) => (<div className='content-item'>
                    {value}
                </div>))}
            </div> : null}
        </div>
    )
}

export default DropDownButton