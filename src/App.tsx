import { Card } from "./shared/Card";
import { foods } from "./types/food";

export function App() {
  const appetizers = foods; //.filter((food) => food.tags.includes("Appetizer"));
  return (
    <>
      <h1>Menu</h1>
      <h2>Appetizers</h2>
      <section className="flex flex-wrap">
        {appetizers.map((food) => (
          <Card key={food.id}>
            <div className="flex">
              <div>
                <h3 className="text-lg font-bold">{food.name}</h3>
                <p>{food.description}</p>
                <p className="mb-4 mt-4">
                  <span className="font-bold">Tags:</span>{" "}
                  {food.tags.join(", ")}
                </p>
                <p className="font-bold">${food.price}</p>
              </div>
              <img src={food.image} alt={food.name} className="h-32 ml-4" />
            </div>
          </Card>
        ))}
      </section>
    </>
  );
}
