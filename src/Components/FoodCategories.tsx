import "./FoodCategories.css";
import { FoodList } from "./FoodLists";

type FoodCategoriesProp = {
  categorizedFoods: FoodList[];
};

const FoodCategories: React.FC<FoodCategoriesProp> = ({ categorizedFoods }) => {
  const renderCategorizedFoods = (foodType: string) => {
    return categorizedFoods
      .filter((item) => item.type === foodType)
      .map((categorizedItem) => (
        <button
          className="FoodCategories__Container__Button"
          key={categorizedItem.id}
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
        {renderCategorizedFoods("Fruit")}
      </div>
      <div className="FoodCategories__Container">
        <div className="FoodCategories__Container__Title">
          <h4>Vegetable</h4>
        </div>
        {renderCategorizedFoods("Vegetable")}
      </div>
    </div>
  );
};

export default FoodCategories;
