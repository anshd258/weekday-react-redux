import React from 'react'
import "../style/inputfield.css"
function InputField({ placeholder, changeHandler }) {

    const handleChange = (e) => {
        changeHandler(e.target.value);

    }
    return (
        <input className='input-field' placeholder={placeholder} onChange={handleChange} />
    )
}

export default InputField