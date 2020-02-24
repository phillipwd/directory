import React from "react";
import tabledata from "./tabledata.json"

class Table extends React.Component{

    state = {
        data: tabledata
    };

    render() {
        console.log(this.state); 
        return(
            <div className = "container">
                <div className = "row">
                    <div className = "col">
                        <p>First Name</p>
                    </div>
                    <div className = "col">
                        <p>Last Name</p>
                    </div>
                    <div className = "col">
                        <p>Home City</p>
                    </div>
                    <div className = "col">
                        <p>Home State</p>
                    </div>
                </div>
                <div className = "row">
                    <div className = "col">
                        <p>{tabledata.results[0].name.first}</p>
                    </div>
                    <div className = "col">
                        <p>{tabledata.results[0].name.last}</p>
                    </div>
                    <div className = "col">
                        <p>{tabledata.results[0].location.city}</p>
                    </div>
                    <div className = "col">
                        <p>{tabledata.results[0].location.state}</p>
                    </div>
                </div>
        </div>
        )
    }
}

export default (Table)