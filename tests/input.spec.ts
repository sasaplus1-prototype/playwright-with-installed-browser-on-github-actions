import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://d-toybox.com/studio/lib/input_event_viewer.html');
  const editor = page.locator('#editor');
  // await page.keyboard.press('\u0015');
  await page.keyboard.press('a');
  await page.keyboard.press('i');
  await page.keyboard.press('u');
  await page.keyboard.press('e');
  await page.keyboard.press('o');
  await page.screenshot({ path: `input.png` });
});
