import React from "react";
import CardList from "./components/CardList/CardList";
import FilterButton from "./components/FilterButton/FilterButton";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Card App</h1>
      <hr className="hr" />
      <FilterButton />
      <CardList />
    </div>
  );
}

export default App;
