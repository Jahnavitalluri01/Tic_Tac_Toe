import React from "react";
import {Box} from './Box';
import './board.css';
export const Board=({board,onClick})=>{
    return(
        <div className="board">{
            board.map((value,ind)=>{
            return <Box value={value} onClick={()=>value===null && onClick(ind)} />})}</div>
    )
}