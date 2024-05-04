import React from 'react'
import "../style/inputfield.css"
function InputField({ placeholder }) {
    return (
        <input className='input-field' placeholder={placeholder} onChange={() => { }} />
    )
}

export default InputField