import { NewFood } from "../Admin";

export async function getFoods() {
  const resp = await fetch("http://localhost:3001/foods");
  if (!resp.ok) {
    throw new Error(resp.statusText);
  }
  return resp.json();
}

export async function addFood(food: NewFood) {
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
