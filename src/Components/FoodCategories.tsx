import "./FoodCategories.css";
import { FoodList } from "./FoodLists";

type FoodCategoriesProp = {
  categorizedFoods: FoodList[];
  createFoodList: (param: FoodList) => void;
  deleteCategorizedFood: (id: string) => void;
  deleteFoodItem: () => void;
};

const FoodCategories: React.FC<FoodCategoriesProp> = ({
  categorizedFoods,
  createFoodList,
  deleteCategorizedFood,
  deleteFoodItem,
}) => {
  const handleFoodButtonClicked = (foodList: FoodList) => {
    createFoodList(foodList);
    deleteCategorizedFood(foodList.id);
  };

  const handleFoodContainerClicked = (foodList: FoodList) => {
    createFoodList(foodList);
    deleteFoodItem();
  };

  const renderCategorizedFoods = (foodType: string) => {
    return categorizedFoods
      .filter((item) => item.type === foodType)
      .map((categorizedItem) => (
        <button
          className="FoodCategories__Container__Button"
          key={categorizedItem.id}
          onClick={() => handleFoodButtonClicked(categorizedItem)}
        >
          {categorizedItem.name}
        </button>
      ));
  };

  return (
    <div className="FoodCategories__Containers">
      <div className="FoodCategories__Container">
        <div className="FoodCategories__Container__Title">
          <h4>Fruit</h4>
        </div>
        <div className="FoodCategories__Container__Buttons">
          {renderCategorizedFoods("Fruit")}
        </div>
      </div>
      <div className="FoodCategories__Container">
        <div className="FoodCategories__Container__Title">
          <h4>Vegetable</h4>
        </div>
        <div className="FoodCategories__Container__Buttons">
          {renderCategorizedFoods("Vegetable")}
        </div>
      </div>
    </div>
  );
};

export default FoodCategories;
