import React from 'react'
import { FaFacebookMessenger } from "react-icons/fa"
import "../style/header.css"
function Header() {
    return (
        <div className='header'>
            <div>👋 Anshdeep...</div>
            <div className='chatbutton'>
                <FaFacebookMessenger className='chaticon' />

            </div>
        </div>
    )
}

export default Header