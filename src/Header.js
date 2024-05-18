import React from 'react'
import MenuIcon from "@material-ui/icons/Menu";
import Ytlogo from "./ytLogo.png";
import Searchicon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import Microphone from "@material-ui/icons/Mic"
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <img className="header__logo" src={Ytlogo} />
            </div>
            <div className="header_input">
                <div className="header__middle">
                    <input className="SearchInput" placeholder="Search" type="text" />
                    <Searchicon className="header_searchBtn" />
                </div>
                <Microphone className="header__icons" />
            </div>
            <div className="header__right">
                <VideoCallIcon className="header__icons" />
                <AppsIcon className="header__icons" />
                <NotificationIcon className="header__icons" />
                <Avatar className="header__icons" scr="htps://yt3.ggpht.com/NpBI-AonCK4jgOnBE56r8QRsv8a3l3dSl7slpARb9EDUktQORWybFt7LzqxgLNsjtgNVQhv6Tng=s176-c-k-c0x00ffffff-no-rj" />

            </div>


        </div>
    )
}
export default Header