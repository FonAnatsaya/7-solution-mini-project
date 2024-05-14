import "./FoodLists.css";

export type FoodList = {
  id: string;
  type: string;
  name: string;
};

type FoodListsProp = {
  foodLists: FoodList[];
};

const FoodLists: React.FC<FoodListsProp> = ({ foodLists }) => {
  return (
    <div className="FoodLists__Container">
      {foodLists.map((foodList) => {
        return (
          <button className="FoodLists__Button" key={foodList.id}>
            {foodList.name}
          </button>
        );
      })}
    </div>
  );
};

export default FoodLists;
