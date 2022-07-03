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

  await page.dispatchEvent('#editor', 'keyup', {"altKey":false,"ctrlKey":false,"shiftKey":false,"metaKey":false,"location":0,"repeat":false,"isComposing":false,"key":"KanjiMode","code":"Lang1"})
  await page.dispatchEvent('#editor', 'keydown', {"altKey":false,"ctrlKey":false,"shiftKey":false,"metaKey":false,"location":0,"repeat":false,"isComposing":false,"key":"Process","code":"KeyA"})
  await page.dispatchEvent('#editor', 'compositionstart', {"data":"","locale":""})
  await page.dispatchEvent('#editor', 'compositionupdate', {"data":"あ","locale":""})
  await page.dispatchEvent('#editor', 'keyup', {"altKey":false,"ctrlKey":false,"shiftKey":false,"metaKey":false,"location":0,"repeat":false,"isComposing":true,"key":"a","code":"KeyA"})
  await page.dispatchEvent('#editor', 'keydown', {"altKey":false,"ctrlKey":false,"shiftKey":false,"metaKey":false,"location":0,"repeat":false,"isComposing":true,"key":"Process","code":"KeyI"})
  await page.dispatchEvent('#editor', 'compositionupdate', {"data":"あい","locale":""})
  await page.dispatchEvent('#editor', 'keyup', {"altKey":false,"ctrlKey":false,"shiftKey":false,"metaKey":false,"location":0,"repeat":false,"isComposing":true,"key":"i","code":"KeyI"})
  await page.dispatchEvent('#editor', 'keydown', {"altKey":false,"ctrlKey":false,"shiftKey":false,"metaKey":false,"location":0,"repeat":false,"isComposing":true,"key":"Process","code":"KeyU"})
  await page.dispatchEvent('#editor', 'compositionupdate', {"data":"あいう","locale":""})
  await page.dispatchEvent('#editor', 'keyup', {"altKey":false,"ctrlKey":false,"shiftKey":false,"metaKey":false,"location":0,"repeat":false,"isComposing":true,"key":"u","code":"KeyU"})
  await page.dispatchEvent('#editor', 'keydown', {"altKey":false,"ctrlKey":false,"shiftKey":false,"metaKey":false,"location":0,"repeat":false,"isComposing":true,"key":"Process","code":"Enter"})
  await page.dispatchEvent('#editor', 'compositionend', {"data":"あいう","locale":""})
  await page.dispatchEvent('#editor', 'keyup', {"altKey":false,"ctrlKey":false,"shiftKey":false,"metaKey":false,"location":0,"repeat":false,"isComposing":false,"key":"Enter","code":"Enter"})

  await page.screenshot({ path: `input.png`, fullPage: true });
});
