import React, { useState, useEffect } from "react";
import "./App.css";
import Table from "./components/table/";
import tabledata from "./components/tabledata.json";
// import Header from "./components/header/"

function App() {
  const [inputState, setInputState] = useState();
  const [stFilter, setStFilter] = useState([]);
  useEffect(() => {
    setStFilter(tabledata.results);
  }, []);
  
    useEffect(() => {
      console.log("in st useEffect")
      console.log(stFilter);
    }, [stFilter]);
  // console.log(stFilter);
  // const sorted = false;
  const handleInputChange = event => {
    // console.log(event);
    setInputState(event.target.value);
    const filtered = stFilter.filter(person => {
      // console.log(person.location.state.toLowerCase());
      const lowercase = person.location.state.toLowerCase();
      if (lowercase.includes(event.target.value)) {
        console.log("state ", lowercase);
        console.log("value", event.target.value);

        return person;
      }
    });
    setStFilter(filtered);
  };

  const handleSortButton = ()=> {
    // const handleSortButton=()=>{
    console.log(stFilter);
    // let users = stFilter;
    let sorting = [...tabledata.results];
    console.log(sorting);
    function compare(a, b) {
      if (a.name.first > b.name.first) return 1;
      if (b.name.first > a.name.first) return -1;
    }
    let sorted = sorting.sort(compare);
    console.log(sorted);
    setStFilter([1,2,3]);
    setStFilter(sorted);
    console.log(stFilter)

  }

  return (
    <div>
      {/* put search stuff here */}
      {/* <Header/> */}
      <div className="headerRow">
        {/* <button className = "FNButton" name = "first" onClick={click} >sort by first name</button> */}
        {/* <button className = "LNButton" name  = "last" >sort by last name</button>
            <button className = "HCFilter" name = "city" >filter by home city</button> */}
        {/* <div> */}
        <input
          name="stFilter"
          placeholder="filter by state"
          onChange={handleInputChange}
          value={inputState}
        ></input>
        <button name="nameSort" onClick={handleSortButton}>
          SORT
        </button>
        {/* <button className = "STFilter" name = "stFilterButton" onClick={click}>filter by home state></button>  */}
        {/* </div>  */}
        {/* <p>{stFilter.tabledata}</p> */}
      </div>
      <div className="container">
        {/* <THeader /> */}
        {stFilter.map((row, index) => (
          <div className="row" key={index}>
            <div className="col">
              <p>{row.name.first}</p>
            </div>
            <div className="col">
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
      </div>

      {/* <Table/> */}
      {/* <Table table = {Table}/> */}
    </div>
  );
}

export default App;
