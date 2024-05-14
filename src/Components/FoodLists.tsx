import "./FoodLists.css";

export type FoodList = {
  id: string;
  type: string;
  name: string;
};

type FoodListsProp = {
  foodLists: FoodList[];
  createFruitOrVegetableList: (param: FoodList) => void;
};

const FoodLists: React.FC<FoodListsProp> = ({
  foodLists,
  createFruitOrVegetableList,
}) => {
  const handleButton = (foodList: FoodList) => {
    createFruitOrVegetableList(foodList);
  };
  return (
    <div className="FoodLists__Container">
      {foodLists.map((foodList) => {
        return (
          <button
            className="FoodLists__Button"
            key={foodList.id}
            onClick={() => handleButton(foodList)}
          >
            {foodList.name}
          </button>
        );
      })}
    </div>
  );
};

export default FoodLists;
