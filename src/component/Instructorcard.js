import React from 'react'
import "./InstructorCard.css"


function Instructorcard() {
    return (
        <div className="instructorCard">
            {/* this is to skect out the first container containing name, avatar, video */}
            <div className="avatar__video">
                <div className="avatar__info">
                    <div className="avatar__name">
                        <img src="/images/default-avatar.svg" alt="" />
                        <h2>John Doe</h2>
                    </div>
                    <div className="inst__social">
                        <img src="https://1000logos.net/wp-content/uploads/2017/02/insta-logo.png" alt="" />
                        <img src="/images/linkedin.svg" alt="" />
                        <img src="/images/website.svg" alt="" />
                    </div>

                </div>
                <div className="inst__video">

                </div>
            </div>
            {/* the statistics will be displayed by this */}
            <div className="inst__stats">
                <h2> Stats</h2>

                <div className="inst__statsValue">
                    <div className="stats__center">
                        <h4>1320</h4>
                        <p>Total Hours Taught</p>

                    </div>
                    <div className="stats__center">
                        <h4>468</h4>
                        <p>Students Taught</p>

                    </div>
                </div>
            </div>
            {/* the technical expertise */}
            <div className="inst__expertise">
                <h2>Technical Expertise</h2>

                <div className="inst__expertiseValue">
                    <div className="stats__expertcenter">
                        <img src="/images/tech-html.svg" alt="" />
                        <p>HTML</p>

                    </div>
                    <div className="stats__expertcenter">
                        <img src="/images/tech-css.svg" alt="" />
                        <p>CSS</p>

                    </div>
                    <div className="stats__expertcenter">
                        <img src="/images/tech-javascript.svg" alt="" />
                        <p>JAVASCRIPT</p>

                    </div>
                    <div className="stats__expertcenter">
                        <img src="/images/tech-reactjs.svg" alt="" />
                        <p>REACT JS</p>

                    </div>
                </div>
            </div>
            {/* tagline */}
            <div className="inst__tagline" >
                <h5>TAGLINE</h5>
                <p>“Everything you want is outside of your comfort zone.”</p>
            </div>

            {/* about information */}
            <div className="inst__container">
                <h5>ABOUT</h5>
                <p>John is a Computer Science graduate. He has been part of the corporate circle since his college days. In his early days, he was part of a startup team delivering production grid android apps. Currently, he is a lead developer at www.edyoda.com. He is responsible for the entire front-end development & integration with the back-end. React, Python, Django are his areas of expertise. He has been delivering corporate training for Android, React, Javascript, Python & Django. </p>
            </div>
        </div>
    )
}

export default Instructorcard
