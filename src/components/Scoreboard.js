import React from "react";
import './scoreboard.css'
export const Scoreboard=({score,xplaying})=>{
    const {xscore,oscore}=score;
    return(
        <div className="scoreboard">
            <span className={`score x-score ${!xplaying && "inactive"}`}>X-{xscore}</span>
            <span className={`score o-score ${ xplaying && "inactive"}`}>0-{oscore}</span>
        </div>
    )
}