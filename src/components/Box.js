import React from "react";
import './box.css';
export const Box=({value,onClick})=>{
    if(value==='X'){
        var style="box x";
    }
    else{
        var style="box o"
    }
    return(
        <button className={style} onClick={onClick}>{value}</button>
    )

}