import React from 'react'
import Dashboard from '../component/Dashboard'
import Header from '../component/Header'
import Info from '../component/Info'
import NavSubject from '../component/NavSubject'
import SideNav from '../component/SideNav'
import "./Modules.css"
function ModulesScreen() {
    return (
        <div className="moduleScreen">
            <Header />
            <Dashboard session="true" />
            <SideNav modules="true" />
            {/* the navbar for subject */}
            <NavSubject />
            {/* the information about subject */}
            <Info />

        </div>
    )
}

export default ModulesScreen
