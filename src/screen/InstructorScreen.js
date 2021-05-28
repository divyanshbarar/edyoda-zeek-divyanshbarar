import React from 'react'
import Dashboard from '../component/Dashboard'
import Header from '../component/Header'
import Instructorcard from '../component/Instructorcard'
import Instructornav from '../component/Instructornav'
import SideNav from '../component/SideNav'
import "./Instructor.css"
function InstructorScreen() {
    return (
        <div className="instructor">

            <Header />
            <Dashboard progress="true" />
            <SideNav instructors="true" />

            {/* the side nav componnet */}
            <Instructornav />

            {/* The about page for instructor */}
            <Instructorcard />
        </div>
    )
}

export default InstructorScreen
