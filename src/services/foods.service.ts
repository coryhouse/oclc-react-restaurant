import { NewFood } from "../Admin";
import { Food } from "../types/food";

export async function getFoods(): Promise<Food[]> {
  const resp = await fetch("http://localhost:3001/foods");
  if (!resp.ok) {
    throw new Error(resp.statusText);
  }
  return resp.json();
}

export async function deleteFood(id: number) {
  const resp = await fetch("http://localhost:3001/foods/" + id, {
    method: "DELETE",
  });
  if (!resp.ok) {
    throw new Error(resp.statusText);
  }
  return;
}

export async function addFood(food: NewFood): Promise<Food> {
  const resp = await fetch("http://localhost:3001/foods", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(food),
  });
  if (!resp.ok) {
    throw new Error(resp.statusText);
  }
  return resp.json();
}
