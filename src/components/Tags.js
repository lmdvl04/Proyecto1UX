import React from 'react'
import "./Tags.css"
import { NavigateNext } from "@material-ui/icons"
function Tags() {
    return (
        <div className="tags" >
            <div className="miniTag1">
                All
            </div>
            <div className="miniTag">
                Music
            </div>
            <div className="miniTag">
                New to you 
            </div>
            <div className="miniTag">
                Makeup
            </div>
            <div className="miniTag">
                Football
            </div>
            <div className="miniTag">
                Races
            </div>
            <div className="miniTag">
                Tennis
            </div>
            <div className="miniTag">
                Mixes
            </div>
            <div className="miniTag">
                React JS
            </div>
            <div className="miniTag">
                Fashion Shows
            </div>
            <div className="miniTag">
                Calculus 
            </div>
            <div className="miniTag">
                Watched
            </div>
            <NavigateNext className= "next"/>

        </div>

    )
}
export default Tags