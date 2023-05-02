import { Button, CircularProgress, TextField } from "@mui/material";
import { FormField } from "./shared/FormField";
import { Food } from "./types/food";
import { useState } from "react";
import { addFood } from "./services/foods.service";
import { useNavigate } from "react-router-dom";

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
  const [isSaving, setIsSaving] = useState(false);
  const navigate = useNavigate();

  function onChange(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    setFood({ ...food, [event.target.id]: event.target.value });
  }

  return (
    <>
      <h1>Admin</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault(); // prevent page reload
          setIsSaving(true);
          await addFood(food);
          navigate("/");
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
        {isSaving && <CircularProgress />}
      </form>
    </>
  );
}
