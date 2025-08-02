import { test, expect } from '@playwright/test';

test('homepage loads correctly', async ({ page }) => {
  await page.goto('/');
  
  // Check if the page title contains expected text
  await expect(page).toHaveTitle(/Gluten Ministry/);
  
  // Check if main content is visible
  await expect(page.locator('main')).toBeVisible();
});

test('navigation works', async ({ page }) => {
  await page.goto('/');
  
  // Test navigation to blog page
  await page.click('text=Blog');
  await expect(page).toHaveURL(/.*blog/);
});