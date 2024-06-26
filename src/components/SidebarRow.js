import { PinDropSharp } from '@material-ui/icons'
import React from 'react'
import "./SidebarRow.css"
function SidebarRow(props) {
    return (
        <div className="Sidebar_row">
            <props.icon className="sidebarRow_icon" />
            <h2 className="sidebarRow_title">{props.title}</h2>
        </div>
    )
}
export default SidebarRow