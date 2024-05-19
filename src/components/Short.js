import React from 'react'
import "./Short.css";
import{MoreVert,PlaylistAdd,WatchLater} from"@material-ui/icons";
import{Avatar}from "@material-ui/core"
function Short(props){
    return(
        <div className="Short">
            <img className="ShortFoto" src={props.ShortFoto}></img>
            <div className="ShortData">
                <Avatar src={props.ShortChannelLogo}/>
                <div className="ShortCosas">
                    <h5>{props.desc}</h5>
                    <p className = "visualizacion">{props.visualizacion}</p>
                </div>
                <div className="MoreVert"><MoreVert className="puntitos"/></div>
            </div>
        </div>
    )
}

export default Short