import { test as pt } from "./fixtures/setup.fixture";

pt(
  "Check User can login using correct credentials",
  { tag: "@browser-opera" },
  async ({ page }) => {
    await page.getByLabel("Email").fill(process.env.EMAIL!);
    await page.getByLabel("Password").fill(process.env.PASSWORD!);
    await page.getByRole("button", { name: "Login" }).click();

    //TODO: Add assertion to check if user is logged in successfully
  },
);


pt('Check User cannot login using incorrect credentials', { tag: "@browser-opera" }, async ({ page }) => {
  await page.getByLabel("Email").fill("invalid@example.com");
  await page.getByLabel("Password").fill("invalidpassword");
  await page.getByRole("button", { name: "Login" }).click();

  //TODO: Add assertion to check if user is not logged in
});