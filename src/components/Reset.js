import React from "react";
import './reset.css'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
export const Reset=({resetboard,reload})=>{
    
    return(
      <div className="par">
    <Button variant="primary" style={{backgroundColor:"#018786",margin:'1rem'}} onClick={resetboard}>Reset</Button>
    
    <Button variant="primary" style={{backgroundColor:"#018786"}} onClick={reload}>Reload</Button>
    
    </div>
    )
}