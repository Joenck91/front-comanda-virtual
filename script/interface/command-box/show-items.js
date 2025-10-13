
import findProductById from '../../utils/productReader.js';

export default async function showItems(notedOrder){
    const orderedItemsDiv = document.getElementById('ordered-items');
    orderedItemsDiv.innerHTML = '';

    // --- MOSTRA PIZZAS ---
    for (const [index, pizzaOrder] of notedOrder.pizzas.entries()) {
        
        const sizeInfo = await findProductById(pizzaOrder.pizza);
        const borderInfo = await findProductById(pizzaOrder.borda);

        const promisesDosSabores = pizzaOrder.sabores.map(saborId => findProductById(saborId));
        const infosDosSabores = await Promise.all(promisesDosSabores);
        let totalPizza = sizeInfo.price + borderInfo.price

        const nomesDosSabores = infosDosSabores
            .map(sabor => (sabor ? sabor.name : 'Sabor Inválido'))
            .join(', ');

        const pizzaDiv = document.createElement('div');
        pizzaDiv.classList.add('ordered-item');
        pizzaDiv.innerHTML = `
            <h4>Pizza ${index + 1} - R$${totalPizza.toFixed(2)}</h4>
            <p>Tamanho: ${sizeInfo.name} - R$${sizeInfo.price.toFixed(2)}</p>
            <p>Borda: ${borderInfo.name} - R$${borderInfo.price.toFixed(2)}</p>
            <p>Sabor(es): ${nomesDosSabores}</p>
            <button class="remove-button" data-index="${index}" data-type="pizza">REMOVER</button>
        `;
        orderedItemsDiv.appendChild(pizzaDiv);
    }

    // --- MOSTRA BEBIDAS ---
    for (const [index, drinkOrder] of notedOrder.drinks.entries()) {
        const drinkInfo = await findProductById(drinkOrder.bebida);

        const drinkDiv = document.createElement('div');
        drinkDiv.classList.add('ordered-item');
        
        drinkDiv.innerHTML = `
            <h4>Bebida(s) ${index + 1} - R$${drinkOrder.quantidadeBebida * drinkInfo.price}</h4>
            <p>Bebida: ${drinkInfo.name} </p>
            <p>Quantidade: ${drinkOrder.quantidadeBebida}</p>
            <button class="remove-button" data-index="${index}" data-type="drink">REMOVER</button>
        `;
        orderedItemsDiv.appendChild(drinkDiv);
    }
};