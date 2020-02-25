import React, { useState }from "react";
import "./style.css";

function header(){
    
    return (
        <div className = "headerRow">
            <button className = "FNButton" name = "first" >sort by first name</button>
            <button className = "LNButton" name  = "last" >sort by last name</button>
            <button className = "STFilter" name = "st" >filter by home state</button>
            <button className = "HCFilter" name = "city" >filter by home city</button>
        </div>
    )
}

export default header;