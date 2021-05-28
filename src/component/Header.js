import React from 'react'
import "./Header.css"
import avatar from "./default-avatar.svg"
import notify from "./Notification.svg"
function Header() {
    return (
        <div className="header">
            <div className="header__content">
                {/* logo part */}
                <img src="https://s3-ap-southeast-1.amazonaws.com/internshala-uploads/google_logo/5f195133ee39e1595494707.png" alt="" />
                <div className="header__container">
                    {/* the side container containing bell, name and avatar */}
                    <img className="header__bell" src={notify} alt="" />
                    <h3>Hi,John Doe!</h3>
                    <img src={avatar} alt="helo" />
                </div>
            </div>
        </div>
    )
}

export default Header
