import { useState } from "react";
import { Card } from "./shared/Card";
import { foods } from "./types/food";

export function App() {
  const searchState = useState("");
  const search = searchState[0];
  const setSearch = searchState[1];

  const matchingFoods = foods.filter((f) =>
    f.name.toLowerCase().includes(search)
  );

  //.filter((food) => food.tags.includes("Appetizer"));

  return (
    <>
      <h1>Menu</h1>
      <form>
        <label htmlFor="search">Search</label>{" "}
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          id="search"
          className="border p-1 border-gray-400"
          type="search"
        />
      </form>

      <h2>Appetizers</h2>
      <section className="flex flex-wrap">
        {matchingFoods.map((food) => (
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
