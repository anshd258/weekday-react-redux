import React from 'react'
import "../style/jobcard.css"
function JobCard() {
    return (
        <div className='main-card'>
            <div className='posted-date'>
                ⌛ Posted 4 Days Ago

            </div>
            <div className='role'>
                <img alt='company image ' className='company-image' height={50} width={40} src='https://logo.clearbit.com/dropbox.com' />

                <div className='role-details'>
                    <div className='company-name'> company name</div>
                    <div className='position'> position</div>
                    <div className='location'> loccation</div>
                </div>

            </div>
            <div className='salary'>
                Estimated Salary: ₹30 - 60 LPA ✅
            </div>
            <h4 className='heading'>
                About Company :
            </h4>
            <h5 className='heading2'>
                About us
            </h5>
            <div className='about-company'>
                <p className='paragraph'>
                    This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.
                </p>
                <div className='overy-lay-box'>
                    <span style={{ cursor: 'pointer' }}>View job</span>
                </div>
            </div>
            <div className='requirements'>
                <p className='paragraph' style={{ color: "#646476", fontSize: "0.9rem", fontWeight: "600" }}>
                    Minimum Expericence
                </p>
                <p className='paragraph' style={{ color: "black", fontSize: "0.9rem", fontWeight: "400", paddingTop: 4 }}>
                    2 years
                </p>

            </div>
            <button className='easy-apply'>
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