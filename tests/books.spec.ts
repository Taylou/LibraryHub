import { test, expect } from '@playwright/test';

test.describe('Books Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/books');
  });

  test('should display book cards', async ({ page }) => {
    const bookCards = await page.locator('[data-testid="book-card"]');
    await expect(bookCards).toHaveCount(3);
  });

  test('should search books', async ({ page }) => {
    await page.getByPlaceholder('Search books...').fill('Mockingbird');
    
    const bookCards = await page.locator('[data-testid="book-card"]');
    await expect(bookCards).toHaveCount(1);
    await expect(page.getByText('To Kill a Mockingbird')).toBeVisible();
  });

  test('should navigate to book details', async ({ page }) => {
    await page.getByText('To Kill a Mockingbird').click();
    await expect(page).toHaveURL(/books\/1/);
    await expect(page.getByRole('heading', { 
      name: 'To Kill a Mockingbird' 
    })).toBeVisible();
  });
});