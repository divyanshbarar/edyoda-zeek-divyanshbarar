import React from 'react'
import "./Learning.css"
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Link } from "react-router-dom"

function Learning() {
    return (
        // the learning part showing on homescreen
        <div className="learning">

            {/* Header of the learning part*/}
            <div className="learning__header">
                <h1>Continue Learning</h1>
                <Link to="/modules">
                    <p>View Module Details</p>
                </Link>

            </div>
            {/* Vision part with subjects and instructor name with all his progress abar */}
            <div className="display">
                <div className="learning__card">
                    <div className="all">
                        <div className="all__2">
                            <img src="/images/tech-javascript.svg" alt="" />
                            <h2>Javascript</h2>
                        </div>
                        <div className="avatar">
                            <img src="/images/default-avatar.svg" alt="" />
                            <h4>John Doe</h4>
                        </div>
                        <div className="progressabc">
                            <h3>Progress</h3>
                            <div className="progress__down">
                                <span></span>
                                <ProgressBar now={40} />
                            </div>
                        </div>
                        <div className="progressabc">
                            <h3>Live Sessions</h3>
                            <div className="progress__down">
                                <span></span>
                                <ProgressBar now={20} />
                            </div>
                        </div>
                        <div className="progressabc">
                            <h3>Assignments</h3>
                            <div className="progress__down">
                                <span></span>
                                <ProgressBar now={60} />
                            </div>
                        </div>
                        <div className="progressabc">
                            <h3>MCQ quiz</h3>
                            <div className="progress__down">
                                <span></span>
                                <ProgressBar now={40} />
                            </div>
                        </div>

                    </div>
                    {/* today's plan */}
                    <div className="progress__abcd">
                        <h4>Today's plan</h4>
                        <p>7 February 2021</p>
                        <div className="progress__language">
                            <h5>Javascript</h5>
                            <div className="progress__quiz">
                                <p>Quiz/Assignments</p>
                                <h6>Opens at 7pm</h6>
                            </div>
                        </div>

                        <Link to="/modules">
                            <button className="join">
                                Join Session
                        </button>
                        </Link>
                        <p className="session__text">Session in progress </p>
                    </div>
                </div>

                {/* the right hand of the learning component */}
                <div className="learning__overview">
                    <h3>Progress Overview</h3>
                    <div className="progress__overview">
                        70%
                        <span>Overall Progress</span>
                        <ProgressBar variant="success" now={70} />
                    </div>
                    <div className="progress__overview">
                        33%
                        <span>Attendance</span>
                        <ProgressBar variant="danger" now={33} />
                    </div>
                    <h6>View Detailed Progress</h6>
                </div>
            </div>
        </div >

    )
}

export default Learning
