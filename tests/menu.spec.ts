import { test, expect } from "@playwright/test";

test("should display food, add food, and delete food", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await expect(page.getByRole("heading", { name: "Menu" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Burger" })).toBeVisible();

  await page.getByRole("link", { name: "Admin" }).click();
  await expect(page.getByRole("heading", { name: "Admin" })).toBeVisible();

  // Submit empty form and assure error messages display
  const submitButton = page.getByRole("button", { name: "Add Menu Item" });
  await submitButton.click();
  await expect(page.getByText("Food name is required.")).toBeVisible();

  // Fill out form to add a new food
  await page.getByLabel("Name").fill("Falafel");
  await page.getByLabel("Description").fill("Tasty");
  await page.getByLabel("Price").fill("14.95");
  await submitButton.click();

  // Assure new food is displayed
  await expect(page.getByRole("heading", { name: "Menu" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Falafel" })).toBeVisible();

  // Delete food
  await page.getByRole("button", { name: "Delete Falafel" }).click();
  await expect(
    page.getByRole("heading", { name: "Falafel" })
  ).not.toBeVisible();

  // Search
  await page.getByLabel("Search").fill("burger");
  await expect(page.getByRole("heading", { name: "Burger" })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Banana Blueberry French Toast" })
  ).not.toBeVisible();
});
