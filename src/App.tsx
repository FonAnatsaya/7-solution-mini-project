import { useState } from "react";
import "./App.css";
import FoodLists, { FoodList } from "./Components/FoodLists";
import FoodCategories from "./Components/FoodCategories";
import { foodListsData } from "./ConstantData";

function App() {
  const [foodLists, setFoodLists] = useState<FoodList[]>(foodListsData);
  const [fruitLists, setFruitLists] = useState<FoodList[]>(foodListsData);
  const [vegetableLists, setVegetableLists] =
    useState<FoodList[]>(foodListsData);

  return (
    <div className="App">
      <FoodLists foodLists={foodLists} />
      <FoodCategories fruitLists={fruitLists} vegetableLists={vegetableLists} />
    </div>
  );
}

export default App;
