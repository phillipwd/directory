import React, { useState }from "react";
import "./style.css";
import tabledata from "../tabledata.json"
console.log(tabledata);

// function Header(){

//     const [stFilter, setStFilter] = useState("");

    // const handleInputChange =event=>{
    //     // console.log(event); 
    //     setStFilter(event.target.value);
    //     const filtered = tabledata.results.filter(person=>{
    //         // console.log(person.location.state.toLowerCase());
    //         const lowercase = person.location.state.toLowerCase()
    //         if(lowercase.includes(event.target.value)){
    //             console.log("state ", lowercase);
    //             console.log("value", event.target.value);
                
    //             return person;
    //         }
    //     })
        // console.log(filtered);
        
    // }
    
    // function click (event){
    //     const clicked = event.target.name;
    //     if(clicked==="first"){
    //         // console.log(tabledata.results);
    //         const toBeSorted = tabledata.results
    //         console.log(toBeSorted);    
        // }
        // else if(clicked==="stButton"){
            // console.log(st.value);
            // const toBeFiltered = tabledata.results.filter(st=>st.location.state === "Washington");
            // console.log(toBeFiltered);
            // return(toBeFiltered)

    //     }
    // }

    // return (
        // <div className = "headerRow">
        //     <button className = "FNButton" name = "first" onClick={click} >sort by first name</button>
        //     <button className = "LNButton" name  = "last" >sort by last name</button>
        //     <button className = "HCFilter" name = "city" >filter by home city</button>
        //     <div>
        //         <input name="stFilter" placeholder = "filter by state" onChange={handleInputChange} value={stFilter}></input>
        //         <button className = "STFilter" name = "stFilterButton" onClick={click}>filter by home state</button>
        //     </div>
        //     <p>{stFilter}</p>
            
        // </div>
//     )
// }

// export default Header;