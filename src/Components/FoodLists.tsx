import "./FoodLists.css";

export type FoodList = {
  id: string;
  type: string;
  name: string;
};

type FoodListsProp = {
  foodLists: FoodList[];
  createFruitOrVegetableList: (param: FoodList) => void;
  deleteFoodList: (param: string) => void;
};

const FoodLists: React.FC<FoodListsProp> = ({
  foodLists,
  createFruitOrVegetableList,
  deleteFoodList,
}) => {
  const handleButton = (foodList: FoodList, id: string) => {
    createFruitOrVegetableList(foodList);
    deleteFoodList(id);
  };
  return (
    <div className="FoodLists__Container">
      {foodLists.map((foodList) => {
        return (
          <button
            className="FoodLists__Button"
            key={foodList.id}
            onClick={() => handleButton(foodList, foodList.id)}
          >
            {foodList.name}
          </button>
        );
      })}
    </div>
  );
};

export default FoodLists;
