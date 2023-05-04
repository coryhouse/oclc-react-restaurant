import { useEffect, useState } from "react";
import { Card } from "./shared/Card";
import { Food } from "./types/food";
import { deleteFood, getFoods } from "./services/foods.service";
import { Button, CircularProgress } from "@mui/material";
import { enqueueSnackbar } from "notistack";

export function Menu() {
  const [search, setSearch] = useState("");
  const [foods, setFoods] = useState<Food[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchFoods() {
      try {
        const foodsResponse = await getFoods();
        setFoods(foodsResponse);
      } catch (err) {
        enqueueSnackbar("Error fetching foods. Try reloading the page.", {
          variant: "error",
        });
      } finally {
        setIsLoading(false);
      }
    }
    fetchFoods();
  }, []);

  // Derived state - Calculated from existing state on each render
  const matchingFoods = foods.filter((f) =>
    f.name.toLowerCase().includes(search)
  );

  //.filter((food) => food.tags.includes("Appetizer"));
  function renderSection() {
    return (
      <section className="flex flex-wrap">
        {isDeleting && (
          <>
            Deleting...
            <CircularProgress />
          </>
        )}
        {matchingFoods.map((food) => (
          <Card className="m-4 bg-cyan-200" key={food.id}>
            <div className="flex">
              <div>
                <Button
                  aria-label={"Delete " + food.name}
                  onClick={async () => {
                    setIsDeleting(true);
                    // Optimistic delete
                    setFoods([...foods.filter((f) => f.id !== food.id)]);
                    deleteFood(food.id);
                    setIsDeleting(false);
                    enqueueSnackbar("Food deleted.", { variant: "success" });
                  }}
                >
                  Delete
                </Button>
                <h3 className="text-lg font-bold">{food.name}</h3>
                <p>{food.description}</p>
                <p className="mt-4 mb-4">
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
    );
  }

  // By throwing here, the Error Boundary will catch it and display the fallback UI
  if (error) throw new Error(error);

  return (
    <>
      <h1>Menu</h1>
      <form>
        <label htmlFor="search">Search</label>{" "}
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          id="search"
          className="p-1 border border-gray-400"
          type="search"
        />
      </form>

      <h2>Appetizers</h2>

      {search.length > 0 && <h3>{matchingFoods.length + " foods found."}</h3>}

      {isLoading ? <CircularProgress /> : renderSection()}
    </>
  );
}
