import React from 'react'
import "./NavSubject.css"
function NavSubject() {
    return (
        //the navbar for subjects
        <div className="navSubject">
            <h3
                className="nav__module"
            >Modules</h3>
            <div className="nav__height">
                <div className="nav__subject0">
                    <img src="/images/tech-html.svg" alt="" />
                    <h4>HTML</h4>
                </div>
                <div className="nav__subject1">
                    <img src="/images/tech-css.svg" alt="" />
                    <h4>CSS</h4>
                </div>
                <div className="nav__subject2">
                    <img src="/images/tech-javascript.svg" alt="" />
                    <h4>JAVASCRIPT</h4>
                </div>
                <div className="nav__subject3">
                    <img src="/images/tech-reactjs.svg" alt="" />
                    <h4>REACT JS</h4>
                </div>
                <div className="nav__subject4">
                    <img src="/images/tech-javascript.svg" alt="" />
                    <h4>DATA STRUCTURE AND ALGORITHM</h4>
                </div>

            </div>

        </div>
    )
}

export default NavSubject
