import { useState } from "react";
import "./App.css";
import FoodLists, { FoodList } from "./Components/FoodLists";
import FoodCategories from "./Components/FoodCategories";
import { foodListsData } from "./ConstantData";

function App() {
  const [foodLists, setFoodLists] = useState<FoodList[]>(foodListsData);
  const [fruitLists, setFruitLists] = useState<FoodList[]>([]);
  const [vegetableLists, setVegetableLists] = useState<FoodList[]>([]);

  const createFruitOrVegetableList = (foodList: FoodList) => {
    foodList.type === "Fruit"
      ? setFruitLists((prev) => [...prev, foodList])
      : setVegetableLists((prev) => [...prev, foodList]);
  };

  const deleteFoodList = (id: string) => {
    setFoodLists((prev) => {
      return prev.filter((each) => each.id !== id);
    });
  };

  return (
    <div className="App">
      <FoodLists
        foodLists={foodLists}
        createFruitOrVegetableList={createFruitOrVegetableList}
        deleteFoodList={deleteFoodList}
      />
      <FoodCategories fruitLists={fruitLists} vegetableLists={vegetableLists} />
    </div>
  );
}

export default App;
