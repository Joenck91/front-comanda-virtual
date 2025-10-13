import findProductById from './productReader.js';

export default async function calculateTotalPrice(order) {
    let total = 0.0;

    // --- SOMA OS PREÇOS DAS PIZZAS ---
    // Usamos um laço for...of que funciona bem com await
    for (const pizzaOrder of order.pizzas) {
        // Buscamos as informações do TAMANHO e da BORDA, pois são eles que têm preço
        const sizeInfo = await findProductById(pizzaOrder.pizza);
        const borderInfo = await findProductById(pizzaOrder.borda);

        // Adicionamos o preço do tamanho ao total
        if (sizeInfo && sizeInfo.price) {
            total += sizeInfo.price;
        }

        // Adicionamos o preço da borda ao total
        if (borderInfo && borderInfo.price) {
            total += borderInfo.price;
        }
    }

    // --- SOMA OS PREÇOS DAS BEBIDAS ---
    for (const drinkOrder of order.drinks) {
        // Buscamos as informações da bebida
        const drinkInfo = await findProductById(drinkOrder.bebida);

        // Adicionamos o preço da bebida multiplicado pela quantidade
        if (drinkInfo && drinkInfo.price) {
            total += drinkInfo.price * drinkOrder.quantidadeBebida;
        }
    }

    return total;
}