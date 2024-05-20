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
import SubscriptionRow from './components/SubscriptionRow';
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
                <hr />
                <h4 className="sidebar-heading">SUBSCRIPTIONS</h4>
                <SubscriptionRow img="https://yt3.googleusercontent.com/wp-YrJ2bHsq4jKC1CLqzMRmaUhb8Iuk1V1REPTBUwxhchHpPrHCIO27bhQrzFzusHLRarepJQg=s160-c-k-c0x00ffffff-no-rj" name="Taylor Swift" />
                <SubscriptionRow img="https://yt3.googleusercontent.com/tyLW5LsJGwr4ViM30OeYbuLcu_MXfpRzP8y-X9_aKfTNJeMFHmnNbPyxxhaFDA9NRgwEu9mT-g=s160-c-k-c0x00ffffff-no-rj" name="Formula 1" />
                <SubscriptionRow img="https://yt3.googleusercontent.com/zcaO7Wc18UjwVyFywKOhmKM75qIuw7-Q6tp-icqWDcM3xJSVkl5oHibPmZdYO-H40Oe6wfHlsw=s160-c-k-c0x00ffffff-no-rj" name="FC Bayern Munich" />
                <SubscriptionRow img="https://yt3.googleusercontent.com/thnzkriwUD98vyhpBpL9VWKVC8S172K84W8VOPwrdUOmXpadThVRv6RRnlIgS3CRpnRjGz6ZOw=s160-c-k-c0x00ffffff-no-rj" name="Vogue" />
                <SubscriptionRow img="https://yt3.googleusercontent.com/ytc/AIdro_kZJNoir4Dx1cfFwBEkRCJA5iVJmx85h6zi1LmIBHS2-FM=s160-c-k-c0x00ffffff-no-rj" name="Luisito Comunica" />

                <SidebarRow icon={ExpandMoreOutlined} title="show more" />

                <hr />
                <h4 className="sidebar-heading">MORE ON YOUTUBE </h4>
                <SidebarRow icon={YouTube} title="Youtube Premium" />
                <SidebarRow icon={Theaters} title="Movies" />
                <SidebarRow icon={SportsEsports} title="Gaming" />
                <hr/>
                <SidebarRow icon={Settings} title="Settings" />
                <SidebarRow icon={Flag} title="Report History" />
                <SidebarRow icon={Help} title="Help" />
                <SidebarRow icon={Feedback} title="Send Feedback" />
                <hr></hr>
                <div className= "footer">
                    <p>About &nbsp; Press &nbsp; Copyright</p>
                    <p>Contact us &nbsp; Creators</p>
                    <p>Advertise &nbsp; Developers </p>
                    <br/>
                    <p>Terms &nbsp; Privacy &nbsp; Policy & Safety</p>
                    <p>How youtube works</p>
                    <p>Test new features</p>
                    <br/>
                    <p style= {{color : "rgb(142,142,142"}}> 2024 Google LLC</p>

                </div>
            </div>
        </div>

    )
}
export default Header