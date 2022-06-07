import { expect, test } from '@playwright/test';

test('inserting an item into the second list', async ({ page }) => {
	await page.goto('/List1');

	// Add an item to the first page
	await page.fill('input', 'First Item');
	expect(page.locator('ul li'), 'The new item is visible').toHaveText('First Item');

	await page.click('[data-test-all-lists]');
	await page.click('[data-test-list-link="List2"]');

	// Add an item to the second page
	await page.fill('input', 'Second Item');
	expect(page.locator('ul li'), 'The new item is visible').toHaveText('Second Item');
});
