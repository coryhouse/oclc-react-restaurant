import { Button, CircularProgress, TextField } from "@mui/material";
import { FormField } from "./shared/FormField";
import { Food } from "./types/food";
import { useState } from "react";
import { addFood } from "./services/foods.service";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";

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

export interface Touched {
  id?: boolean;
  name?: boolean;
  image?: boolean;
  price?: boolean;
  description?: boolean;
  tags?: boolean;
}

const newFood: NewFood = {
  name: "",
  image: "",
  price: null,
  description: "",
  tags: [],
};

type Status = "idle" | "submitted" | "saving";

export function Admin() {
  const [touched, setTouched] = useState<Touched>({});
  const [status, setStatus] = useState<Status>("idle");
  const [food, setFood] = useState(newFood);
  const [isSaving, setIsSaving] = useState(false);
  const navigate = useNavigate();

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
          setIsSaving(true);
          await addFood(food);
          enqueueSnackbar("Saved food! 🍦", { variant: "success" });
          navigate("/");
        }}
      >
        <FormField>
          <TextField
            label="Name"
            onBlur={() => setTouched({ ...touched, name: true })}
            id="name"
            value={food.name}
            onChange={onChange}
            error={
              (touched.name || status === "submitted") && Boolean(errors.name)
            }
            helperText={(touched.name || status === "submitted") && errors.name}
          />
        </FormField>

        <FormField>
          <TextField
            label="Description"
            onBlur={() => setTouched({ ...touched, name: true })}
            id="description"
            value={food.description}
            onChange={onChange}
            error={
              (touched.description || status === "submitted") &&
              Boolean(errors.description)
            }
            helperText={
              (touched.description || status === "submitted") &&
              touched.description &&
              errors.description
            }
          />
        </FormField>

        <FormField>
          <TextField
            label="Price"
            onBlur={() => setTouched({ ...touched, name: true })}
            id="price"
            type="number"
            value={food.price ?? ""}
            onChange={onChange}
            error={
              (touched.price || status === "submitted") && Boolean(errors.price)
            }
            helperText={
              (touched.price || status === "submitted") && errors.price
            }
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
