import { useState } from "react";
import "./App.css";
import FoodLists, { FoodList } from "./Components/FoodLists";
import FoodCategories from "./Components/FoodCategories";
import { foodListsData } from "./ConstantData";

function App() {
  const [foodLists, setFoodLists] = useState<FoodList[]>(foodListsData);
  const [categorizedFoods, setCategorizedFoods] = useState<FoodList[]>([]);

  const createCategorizedFoodList = (foodList: FoodList) => {
    setCategorizedFoods((prev) => [...prev, foodList]);
  };

  const deleteFoodList = (id: string) => {
    setFoodLists((prev) => prev.filter((each) => each.id !== id));
  };

  const createFoodList = (foodList: FoodList) => {
    setFoodLists((prev) => [...prev, foodList]);
  };

  const deleteCategorizedFood = (id: string) => {
    setCategorizedFoods((prev) => prev.filter((each) => each.id !== id));
  };

  const deleteFoodItem = () => {
    setCategorizedFoods((prev) => {
      const updatedFoodLists = prev.slice(1);
      return [...updatedFoodLists];
    });
  };

  return (
    <div className="App">
      <FoodLists
        foodLists={foodLists}
        createCategorizedFoodList={createCategorizedFoodList}
        deleteFoodList={deleteFoodList}
      />
      <FoodCategories
        categorizedFoods={categorizedFoods}
        createFoodList={createFoodList}
        deleteCategorizedFood={deleteCategorizedFood}
        deleteFoodItem={deleteFoodItem}
      />
    </div>
  );
}

export default App;
