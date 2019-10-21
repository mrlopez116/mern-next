import React from 'react'

const PatientBlock = ({ first_name, last_name }) => (
    <div className="PatientBlock" >
        <li>
            {first_name} {last_name}
        </li>
    </div >
)

export default PatientBlock;