import React from 'react'
import "./Sidenav.css"
import { Link } from "react-router-dom"
function SideNav({ home = false, modules = false, instructors = false }) {
    return (
        //the side navbar containing home , module and instructor
        <div className="sidenav">
            <div className="sidenav__content">
                {/* if home is true then show the shaded part */}
                {!home ? (
                    <Link to="/">
                        <div className="img__text ">
                            <img src="/images/home-white.svg" alt="" />
                            <span className="text">Home</span></div>
                    </Link>
                )
                    :
                    <Link to="/">
                        <div className="img__text img__textBackground">
                            <img src="/images/home-dark.svg" alt="" />
                            <span className="text">Home</span></div>
                    </Link>
                }

                {/* if module is true then show the shaded part */}
                {!modules ? (

                    <Link to="/modules">
                        <div className="img__text">
                            <img src="/images/modules-white.svg" alt="" />
                            <span className="text">Modules</span></div>
                    </Link>
                )
                    :
                    <Link to="/modules">
                        <div className="img__text img__textBackground">
                            <img src="/images/modules-dark.svg" alt="" />
                            <span className="text">Modules</span></div>
                    </Link>
                }

                {/*  if instructor is true then show the shaded part*/}
                {!instructors ? (
                    <Link to="/instructor">
                        <div className="img__text">
                            <img src="/images/instructors-white.svg" alt="" />
                            <span className="text">Instructors</span></div>
                    </Link>
                )
                    :
                    <Link to="/instructor">
                        <div className="img__text img__textBackground">
                            <img src="/images/instructors-dark.svg" alt="" />
                            <span className="text">Instructors</span></div>
                    </Link>
                }

            </div>
        </div>
    )
}

export default SideNav
