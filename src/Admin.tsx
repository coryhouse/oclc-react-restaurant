import { Button, CircularProgress } from "@mui/material";
import { Food } from "./types/food";
import { useState } from "react";
import { addFood } from "./services/foods.service";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import { TextField } from "./shared/TextField";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export interface NewFood extends Omit<Food, "id" | "price"> {
  price: number | null;
}

export interface Errors {
  id?: string;
  name?: string;
  image?: string;
  price?: string;
  description?: string;
  tags?: string;
}

const newFood: NewFood = {
  name: "",
  image: "",
  price: null,
  description: "",
  tags: [],
};

export type Status = "idle" | "submitted" | "saving";

export function Admin() {
  const [status, setStatus] = useState<Status>("idle");
  const [food, setFood] = useState(newFood);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const addFoodMutation = useMutation({
    mutationFn: addFood,
    onSuccess: () => {
      enqueueSnackbar("Saved food! 🍦", { variant: "success" });
      queryClient.invalidateQueries({ queryKey: ["foods"] });
      navigate("/");
    },
  });

  function onChange(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    setFood({ ...food, [event.target.id]: event.target.value });
  }

  function getErrors() {
    const errors: Errors = {};
    if (!food.name) errors.name = "Food name is required.";
    if (!food.description) errors.description = "Description is required.";
    if (!food.price) errors.price = "Price is required.";
    return errors;
  }

  const errors = getErrors();

  return (
    <>
      <h1>Admin</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault(); // prevent page reload

          // If there are errors, stop here.
          if (Object.keys(errors).length > 0) {
            setStatus("submitted");
            return;
          }

          setStatus("saving");
          addFoodMutation.mutate(food);
        }}
      >
        <TextField
          label="Name"
          id="name"
          value={food.name}
          onChange={onChange}
          error={errors.name}
          status={status}
        />

        <TextField
          label="Description"
          id="description"
          value={food.description}
          onChange={onChange}
          error={errors.description}
          status={status}
        />

        <TextField
          label="Price"
          id="price"
          type="number"
          value={food.price ?? ""}
          onChange={onChange}
          error={errors.price}
          status={status}
        />

        <Button variant="contained" type="submit">
          Add Menu Item
        </Button>
        {addFoodMutation.isLoading && <CircularProgress />}
      </form>
    </>
  );
}
