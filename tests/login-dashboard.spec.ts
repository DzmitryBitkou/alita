import { test, expect } from '@playwright/test';

test('Login and verify dashboard element', async ({ page }) => {
  // Step 1: Navigate to the login page
  await page.goto('https://example.com/login');

  // Step 2: Enter valid credentials
  await page.fill('#username', 'your-username');
  await page.fill('#password', 'your-password');

  // Step 3: Click the login button
  await page.click('button[type="submit"]');

  // Step 4: Wait for navigation to the dashboard
  await page.waitForURL('https://example.com/dashboard');

  // Step 5: Verify the presence of a specific element on the dashboard
  const dashboardElement = await page.locator('#specific-dashboard-element');
  await expect(dashboardElement).toBeVisible();
});