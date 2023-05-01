import { foods } from "./types/food";

export function App() {
  const appetizers = foods.filter((food) => food.tags.includes("Appetizer"));
  return (
    <>
      <h1>Menu</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h2>Appetizers</h2>
      {appetizers.map((food) => (
        <p key={food.id}>
          {food.name} - ${food.price}
        </p>
      ))}
    </>
  );
}
