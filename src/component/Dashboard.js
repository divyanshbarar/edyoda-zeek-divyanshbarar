// import { FormControl, MenuItem, Select } from '@material-ui/core'
import React, { useState } from 'react'
import "./Dashboard.css"
import ProgressBar from 'react-bootstrap/ProgressBar'


function Dashboard({ progress = false, session = false }) {
    //state to check the toggle part
    const [toggle, setToggle] = useState(false);
    return (
        <div className="all">
            <div className="dashboard">
                {/* ih the button is  clicked the status gets inversed and the following code works */}
                <button onClick={() => setToggle(!toggle)} className="dropdown">TEST-010120
            <img className={`dropdown__icon ${toggle && "rotate"}`} src="/images/dropdown-icon-white.svg" alt="" />
                </button>
                <h2>Full Stack Developer Program</h2>


                {/* if the dashoard is called in home or instructor screen this code will execute */}
                {progress && (<div className="progress__abc">
                    39%
                    <ProgressBar animated now={67} />
                </div>)}



                {/* if the page is called is session page then thois code is executed */}
                {session && (
                    <div className="dashboard__container">
                        <h6> Begins in 12 minutes</h6>
                        <button className="join__dash">
                            Join Session
                                 </button>
                    </div>
                )}
            </div>
            {/* if toggle status is true it will show the select TEST */}

            {
                toggle && (<div className="dropdown__item">



                    <h3 className="selected">TEST-010120</h3>
                    <h3>TEXT-020220</h3>
                    <h3>TEXT-030320</h3>
                </div>
                )
            }



        </div >
    )
}

export default Dashboard
