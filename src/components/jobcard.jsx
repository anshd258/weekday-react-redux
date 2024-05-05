import React from 'react'
import "../style/jobcard.css"
import { Link } from 'react-router-dom'
function JobCard({ companyName, link, logoUrl, role, location, desc, minExp, maxSal, minSal, currency }) {
    return (
        <div className='main-card'>
            <div className='posted-date'>
                ⌛ Posted 4 Days Ago

            </div>
            <div className='role'>
                <img alt='company image ' className='company-image' height={50} width={40} src={logoUrl} />

                <div className='role-details'>
                    <div className='company-name'> {companyName}</div>
                    <div className='position'> {role}</div>
                    <div className='location'> {location}</div>
                </div>

            </div>
            <div className='salary'>
                Estimated Salary: {currency}{minSal} - {maxSal} LPA ✅
            </div>
            <h4 className='heading'>
                About Company :
            </h4>
            <h5 className='heading2'>
                About us
            </h5>
            <div className='about-company'>
                <p className='paragraph'>
                    {desc}
                </p>
                <div className='overy-lay-box'>
                    <Link target='_blanck' to={link} style={{ cursor: 'pointer', color: "#2515DB" }}>View job</Link>
                </div>
            </div>
            <div className='requirements'>
                <p className='paragraph' style={{ color: "#646476", fontSize: "0.9rem", fontWeight: "600" }}>
                    Minimum Expericence
                </p>
                <p className='paragraph' style={{ color: "black", fontSize: "0.9rem", fontWeight: "400", paddingTop: 4 }}>
                    {minExp} years
                </p>

            </div>
            <button className='easy-apply' >
                ⚡ Easy Apply
            </button>
            <button className='unlock-referal'>
                <img />
                <img />
                Unlock referral ask

            </button>
        </div>
    )
}

export default JobCard