import React from 'react'
import "./InstructorNav.css"
function Instructornav() {
    return (
        // the navbar for instructors
        <div className="instructornav">
            <h3 className="inst__text">Instructors</h3>
            {/* instructor john doe */}
            <div className="inst__teacher">
                <div className="inst__avatar">
                    <img src="/images/default-avatar.svg" alt="" />
                    <h6>John Doe</h6>
                </div>
                <div className="inst__teacherSubject">
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JAVASCRIPT</p>
                </div>
            </div>
            {/* instructor Daphne doe */}
            <div className="inst__teacher2">
                <div className="inst__avatar">
                    <img src="/images/default-avatar.svg" alt="" />
                    <h6>Daphne Doe</h6>
                </div>
                <div className="inst__teacherSubject">
                    <p>PYTHON</p>
                    <p>DATA STRUCTURE & ALGORITHM</p>

                </div>
            </div>
        </div>
    )
}

export default Instructornav
