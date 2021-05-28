import React from 'react'
import "./Info.css"
function Info() {
    return (
        // this is the info page about the subject
        <div className="info">
            {/* deatils header */}
            <h3> Javascript</h3>
            <p>7 May 2021, Monday</p>

            {/* session details */}
            <h5 className="info__session">Session Plan</h5>
            <div className="info__points">
                <p>1. Introduction to JavaScript<br />
                    2. Language Basics: Variables, Data Types - Primitive and Reference<br />
                    3. Number (Add, Sub, Mul, NaN, Infinity), Inbuilt Functions - Numbers<br />
                    4. Dialogs: Alert, Confirm, Input<br />
                    5. Control Flow</p>

            </div>
        </div>
    )
}

export default Info
