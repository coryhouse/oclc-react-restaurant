import { test, expect } from "@playwright/test";

test("should display food, add food, and delete food", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await expect(page.getByRole("heading", { name: "Menu" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Burger" })).toBeVisible();

  await page.getByRole("link", { name: "Admin" }).click();
  await expect(page.getByRole("heading", { name: "Admin" })).toBeVisible();

  // Submit empty form and assure error messages display
  await page.getByRole("button", { name: "Add Menu Item" }).click();
  await expect(page.getByText("Food name is required.")).toBeVisible();

  // Fill out form
  await page.getByLabel("Name").fill("Pizza");
  await page.getByLabel("Description").fill("Tasty");
  await page.getByLabel("Price").fill("14.95");
});
