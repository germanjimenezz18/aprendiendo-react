// @ts-check
import { test, expect } from '@playwright/test'
const LOCALHOST_URL = 'http://localhost:5173'
const CAT_PREFIX_URL = 'https://cataas.com'

test('app shows random fact and iamge', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')
  console.log(textContent)
  console.log(imageSrc)
  // se usa ? para evitar errores en caso de que la variable sea null o undefined
  // Si ocurre simplemente deovlvera undefined
  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CAT_PREFIX_URL)).toBeTruthy()
})
