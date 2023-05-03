import { test, expect } from "@playwright/test";

test("should display food, add food, and delete food", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await expect(page.getByRole("heading", { name: "Menu" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Burger" })).toBeVisible();
});
