import { expect, test } from '@playwright/test';

test('inserting an item into the second list', async ({ page }) => {
	await page.goto('/List1');

	// Add an item to the first page
	await page.fill('[data-test-new-item]', 'First Item');
	await page.click('[data-test-submit-item]');

	await expect(page.locator('ul li'), 'The new item is visible on the first page').toHaveText(
		'First Item'
	);

	await page.click('[data-test-all-lists]');
	await page.click('[data-test-list-link="List2"]');

	// Add an item to the second page
	await page.fill('[data-test-new-item]', 'First Item');
	await page.click('[data-test-submit-item]');

	await expect(page.locator('ul li'), 'The new item is visible on the second page').toHaveText(
		'Second Item'
	);
});
