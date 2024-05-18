import React from 'react'
import "./SubscriptionRow.css"
import Live from "./live.png";
function SubscriptionRow(props) {
    return (
        <div className="subscriptionRow">
            <div className="left">
                <img className="channelLogo" src={props.img} />
                <p className="channelName">{props.name}</p>

            </div>
            <div className="right">
                <img className="liveImg" src={Live} />

            </div>
        </div>

    )
}
export default SubscriptionRow