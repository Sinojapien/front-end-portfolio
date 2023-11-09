import { test, expect } from "@playwright/test";

test("test header buttons", async ({ page }) => {
  // Visible page
  await page.goto("/");

  // Test About button, behaviour: scroll
  await page.getByRole("button", { name: "About" }).click();
  await page.waitForTimeout(500); //TODO: replace timeout
  await expect(
    await page.getByRole("heading").filter({ hasText: "About Me" }),
  ).toBeVisible();

  // Test Experience button, behaviour: scroll
  await page.getByRole("button", { name: "Experience" }).click();
  await page.waitForTimeout(500); //TODO: replace timeout
  await expect(
    await page.getByRole("heading").filter({ hasText: "Experience" }),
  ).toBeVisible();

  // Test Contact button, behaviour: scroll
  await page.getByRole("button", { name: "Contact" }).click();
  await page.waitForTimeout(500); //TODO: replace timeout
  await expect(
    await page.getByRole("heading").filter({ hasText: "Contact" }),
  ).toBeVisible();
});

test("test introduction section", async ({ page }) => {
  // Visible page
  await page.goto("/");

  // Learn More button, behaviour: scroll
  await page.getByRole("button", { name: "Learn More" }).click();
  await page.waitForTimeout(500); //TODO: replace timeout
  await expect(
    await page.getByRole("heading").filter({ hasText: "About Me" }),
  ).toBeVisible();

  // Resume button, behaviour: download PDF file
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("button", { name: "Resume" }).click();
  await expect(
    await page.getByRole("button", { name: "Resume" }),
  ).toBeDisabled();
  expect((await downloadPromise).suggestedFilename()).toBe("Resume.pdf");
});

test("test contact section", async ({ page }) => {
  // Visible page
  await page.goto("/");

  // Github button, behaviour: visit url
  await page.getByRole("link", { name: "Github" }).click();
  await expect(await page.url()).toMatch(/https:\/\/github.com\/*?/g);
  await page.goBack();

  // LinkedIn button, behaviour: visit url
  await page.getByRole("link", { name: "LinkedIn" }).click();
  await expect(await page.url()).toMatch(/https:\/\/www.linkedin.com\/*?/g);
  await page.goBack();
});
