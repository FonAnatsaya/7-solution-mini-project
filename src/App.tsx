import { useState } from "react";
import "./App.css";
import FoodLists, { FoodList } from "./Components/FoodLists";
import FoodCategories from "./Components/FoodCategories";
import { foodListsData } from "./ConstantData";

function App() {
  const [foodLists, setFoodLists] = useState<FoodList[]>(foodListsData);
  const [categorizedFoods, seCategorizedFoods] = useState<FoodList[]>([]);

  const createFruitOrVegetableList = (foodList: FoodList) => {
    seCategorizedFoods((prev) => [...prev, foodList]);
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
      <FoodCategories categorizedFoods={categorizedFoods} />
    </div>
  );
}

export default App;
