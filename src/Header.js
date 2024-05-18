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


// import Home from "@material-ui/icons/Home"
// import ExploreIcon from "@material-ui/icons/Explore";
// import SubscriptionIcon from "@material-ui/icons//Subscriptions";
// import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";

// import {History, OndemandVideo, WatchLater, ThumbUp, ExpandMoreOutLined, YouTube, Theaters, portsEsports, Settings, Flag, Help, Feedback} 

import Home from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import History from "@material-ui/icons/History";
import OndemandVideo from "@material-ui/icons/OndemandVideo";
import WatchLater from "@material-ui/icons/WatchLater";
import ThumbUp from "@material-ui/icons/ThumbUp";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";
import YouTube from "@material-ui/icons/YouTube";
import Theaters from "@material-ui/icons/Theaters";
import SportsEsports from "@material-ui/icons/SportsEsports";
import Settings from "@material-ui/icons/Settings";
import Flag from "@material-ui/icons/Flag";
import Help from "@material-ui/icons/Help";
import Feedback from "@material-ui/icons/Feedback";
import SidebarRow from "./components/SidebarRow";
import "./Sidebar.css";
function Header() {
    return (

        <div className="parent_header">
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
            <div className="sidebar">
                <SidebarRow icon={Home} title="Home" />
                <SidebarRow icon={ExploreIcon} title="Explore" />
                <SidebarRow icon={SubscriptionIcon} title="Subscription" />
                <hr></hr>
                <SidebarRow icon={VideoLibraryIcon} title="Library" />
                <SidebarRow icon={History} title="History" />
                <SidebarRow icon={OndemandVideo} title="Your Videos" />
                <SidebarRow icon={WatchLater} title="Watch Later" />
                <SidebarRow icon={ThumbUp} title="Likes Videos" />
                <SidebarRow icon={ExpandMoreOutlined} title="Show more" />
                <hr/>
                <h4 className = "sidebar-heading">SUBSCRIPIONS</h4>
            </div>
        </div>

    )
}
export default Header