import React, { Component } from "react";
import tabledata from "../tabledata.json";
import THeader from "../THeader/";

class Table extends Component {
  state = { tabledata };
  render() {
    return (
      <div className="container">
        <THeader />
        {this.state.tabledata.results.map(row => (
          <div className="row">
            <div className="col">
              <p>{row.name.first}</p>
            </div><div className="col">
              <p>{row.name.last}</p>
            </div>
            <div className="col">
              <p>{row.location.city}</p>
            </div>
            <div className="col">
              <p>{row.location.state}</p>
            </div>
          </div>
        ))}
        <div className="row">
          <div className="col">
            <p>{tabledata.results[0].name.first}</p>
          </div>
          <div className="col">
            <p>{tabledata.results[0].name.last}</p>
          </div>
          <div className="col">
            <p>{tabledata.results[0].location.city}</p>
          </div>
          <div className="col">
            <p>{tabledata.results[0].location.state}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Table;
