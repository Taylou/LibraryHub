import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should display welcome message', async ({ page }) => {
    await page.goto('/');
    
    await expect(page.getByRole('heading', { 
      name: /Welcome to LibraryHub/i 
    })).toBeVisible();
  });

  test('should navigate to books page', async ({ page }) => {
    await page.goto('/');
    
    await page.getByRole('link', { name: 'Books' }).click();
    await expect(page).toHaveURL(/books/);
  });
});