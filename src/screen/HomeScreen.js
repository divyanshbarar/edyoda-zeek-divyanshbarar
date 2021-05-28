import React from 'react'
import Dashboard from '../component/Dashboard'
import Header from '../component/Header'
import Learning from '../component/Learning'
import ModuleCard from '../component/ModuleCard'
import SideNav from '../component/SideNav'
import "./HomeScreen.css"
function HomeScreen() {
    return (
        <div className="home">
            {/* divided the page into components  */}
            <Header />
            <Dashboard progress="true" />
            <SideNav home="true" />
            <Learning />
            {/* Upcoming part of the home screen */}
            <h1 className="upcoming">
                Upcoming Modules
</h1>
            <div className="container">
                <ModuleCard url="/images/tech-reactjs.svg" name="React Js" />
                <ModuleCard url="/images/tech-django.svg" name="Django" />
                <ModuleCard url="/images/tech-aws.svg" name="Intro to AWS" />
                <ModuleCard url="/images/tech-data-analysis.svg" name="Data Analysis Fundamentals" />
            </div>

            <div className="button__next">
                <button><img src="https://lh3.googleusercontent.com/proxy/BdRhfpwTpUMUSB3wVaWidn0hviyW56GByTz8FZDGUqkVea-XGH50nx3MQ3ZhlDspFbtBe2w92YNMLx8fGvRy-eOHAwG5tbUf2VOS9QAvmmiiBNcRhFY7Ukg_PFBqJiN4cg4" alt="" /></button>
                <button><img src="https://library.kissclipart.com/20181202/bce/kissclipart-arrow-right-icon-clipart-arrow-computer-icons-5957ec8e46b29996.jpg" alt="" /></button>
            </div>

        </div >
    )
}

export default HomeScreen
