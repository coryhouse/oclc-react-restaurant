import { Box, Button, TextField } from "@mui/material";
import { FormField } from "./shared/FormField";
import { Food, FoodTag } from "./types/food";
import { useState } from "react";
import { addFood } from "./services/foods.service";

export interface NewFood extends Omit<Food, "id" | "price"> {
  price: number | null;
}

const newFood: NewFood = {
  name: "",
  image: "",
  price: null,
  description: "",
  tags: [],
};

export function Admin() {
  const [food, setFood] = useState(newFood);

  function onChange(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    setFood({ ...food, [event.target.id]: event.target.value });
  }

  return (
    <>
      <h1>Admin</h1>
      <form
        onSubmit={() => {
          addFood(food);
        }}
      >
        <FormField>
          <TextField
            label="Name"
            id="name"
            value={food.name}
            onChange={onChange}
          />
        </FormField>

        <FormField>
          <TextField
            label="Description"
            id="description"
            value={food.description}
            onChange={onChange}
          />
        </FormField>

        <FormField>
          <TextField
            label="Price"
            id="price"
            type="number"
            value={food.price ?? ""}
            onChange={onChange}
          />
        </FormField>
        <Button variant="contained" type="submit">
          Add Menu Item
        </Button>
      </form>
    </>
  );
}
