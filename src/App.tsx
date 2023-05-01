import { Food, foods } from "./types/food";

export function App() {
  function renderFood(food: Food) {
    return <p>{food.name}</p>;
  }

  return (
    <>
      <h1>Menu</h1>
      <h2>Appetizers</h2>
      {foods.map(renderFood)}
    </>
  );
}
