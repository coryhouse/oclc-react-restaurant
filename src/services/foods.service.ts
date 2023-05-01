export async function getFoods() {
  const resp = await fetch("http://localhost:3001/foods");
  if (!resp.ok) {
    throw new Error(resp.statusText);
  }
  return resp.json();
}
