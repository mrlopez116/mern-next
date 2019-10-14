import React from 'react'

const PatientBlock = ({ first_name }) => (
    <div className="PatientBlock" >
        <li>
            {first_name}
        </li>
    </div >
)

export default PatientBlock;