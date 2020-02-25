import React from 'react';
import './App.css';
import Table from "./components/table/"
import Header from "./components/header/"

function App() {
  return (
    <div>
      {/* put search stuff here */}
      <Header/>
      <Table/>
      {/* <Table table = {Table}/> */}
    </div>
  );
}

export default App;
