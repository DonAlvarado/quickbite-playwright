
const { test, expect } = require('@playwright/test');

test('RETO 3 - pedidos de Q100 o más deberían conservar envío gratis', async ({ page }) => {
  await page.goto('/');

  // Regla: subtotal >= Q100 => envío gratis.

  const pizza = page.locator('article.card').filter({
    has: page.getByRole('heading', { name: 'Pizza Pepperoni' })
  });

  // TODO 1: aumentar la cantidad a 2
  await pizza.getByRole('button', { name: '+' }).click();

  // TODO 2: agregar las pizzas al carrito
  await pizza.getByRole('button', { name: 'Agregar' }).click();

  // TODO 3: comprobar subtotal Q110.00
  await expect(
    page.getByText('Q110.00', { exact: true })
  ).toBeVisible();

  // TODO 4: comprobar envío gratis Q0.00
  await expect(
    page.getByText('Q0.00', { exact: true })
  ).toBeVisible();
});
