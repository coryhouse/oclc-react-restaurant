import { useState } from "react";
import { Card } from "./shared/Card";
import { deleteFood, getFoods } from "./services/foods.service";
import { Button, CircularProgress } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { useUserContext } from "./context/UserContext";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function Menu() {
  const [search, setSearch] = useState("");

  const { user } = useUserContext();
  const queryClient = useQueryClient();

  const { data: foods = [], isLoading } = useQuery({
    queryKey: ["foods"],
    queryFn: getFoods,
  });

  const deleteFoodMutation = useMutation({
    mutationFn: deleteFood,
    onSuccess: () => {
      // Remove foods from cache and refetch
      // other option: Remove one item from cache.
      queryClient.invalidateQueries({ queryKey: ["foods"] });
      enqueueSnackbar("Food deleted.", {
        variant: "success",
      });
    },
  });

  // Derived state - Calculated from existing state on each render
  const matchingFoods = foods.filter((f) =>
    f.name.toLowerCase().includes(search)
  );

  //.filter((food) => food.tags.includes("Appetizer"));
  function renderSection() {
    return (
      <section className="flex flex-wrap">
        {matchingFoods.map((food) => (
          <Card className="m-4 bg-cyan-200" key={food.id}>
            <div className="flex">
              <div>
                <Button
                  aria-label={"Delete " + food.name}
                  onClick={async () => {
                    deleteFoodMutation.mutate(food.id);
                  }}
                >
                  {deleteFoodMutation.isLoading &&
                  // Only change the label if the mutation is for this particular food id.
                  deleteFoodMutation.variables === food.id
                    ? "Deleting..."
                    : "Delete"}
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

  return (
    <>
      <h1>Menu</h1>
      {user && <p>Welcome, {user.name}!</p>}
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
