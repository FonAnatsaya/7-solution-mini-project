import "./FoodCategories.css";
import { FoodList } from "./FoodLists";

type FoodCategoriesProp = {
  fruitLists: FoodList[];
  vegetableLists: FoodList[];
};

const FoodCategories: React.FC<FoodCategoriesProp> = ({
  fruitLists,
  vegetableLists,
}) => {
  return (
    <div className="FoodCategories__Containers">
      <div className="FoodCategories__Container">
        <div className="FoodCategories__Container__Title">
          <h4>Fruit</h4>
        </div>
        {fruitLists.map((fruitList) => {
          return (
            <button
              className="FoodCategories__Container__Button"
              key={fruitList.id}
            >
              {fruitList.name}
            </button>
          );
        })}
      </div>
      <div className="FoodCategories__Container">
        <div className="FoodCategories__Container__Title">
          <h4>Vegetable</h4>
        </div>
        {vegetableLists.map((vegetableList) => {
          return (
            <button
              className="FoodCategories__Container__Button"
              key={vegetableList.id}
            >
              {vegetableList.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FoodCategories;
