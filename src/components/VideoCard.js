import React from 'react'
import "./VideoCard.css";
import{MoreVert,PlaylistAdd,WatchLater} from"@material-ui/icons";
import{Avatar}from "@material-ui/core"
function VideoCard(props){
    return(
        <div className="videoCard">
            <div className="watchLater"><WatchLater className="videoIcon"/></div>
            <div className="playlistAdd"><PlaylistAdd className="videoIcon"/></div>
            <img className="videoImg" src={props.thumbnail}></img>
            <div className="duration">{props.duration}</div>
            <div className="videoData">
                <Avatar src={props.channelLogo}/>
                <div className="channelDetails">
                    <h5>{props.title}</h5>
                    <p className = "c_name">{props.channelName}</p>
                    <p>{props.views}&bull; {props.time}</p>
                </div>
                <MoreVert className="moreIcon"/>
            </div>
        </div>
    )
}

export default VideoCard