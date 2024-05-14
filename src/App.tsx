import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FoodLists from "./FoodLists";
import FoodCategories from "./FoodCategories";

function App() {
  return (
    <div className="App">
      <FoodLists />
      <FoodCategories />
    </div>
  );
}

export default App;
