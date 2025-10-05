import { notedOrder } from "../../command/orders";

export default function showItems(notedOrder) {
    const ordered-itens = document.getElementsByClassName('ordered-itens');
    ordered-itens.innerHTML = ''; // Limpa os itens anteriores

    // Mostra pedido
    notedOrder.pizzas.forEach((pizza, index) => {
        const pizzaDiv = document.createElement('div');
        pizzaDiv.classList.add('ordered-item');
        pizzaDiv.innerHTML = `
            <h4>Pizza ${index + 1}</h4>
            <p>Tamanho: ${pizza.pizza}</p>
            <p>Borda: ${pizza.borda}</p>
            <p>Sabores: ${pizza.sabores.join(', ')}</p>
        `;
        ordered-itens.appendChild(pizzaDiv);
    });

    notedOrder.drinks.forEach((drink, index) => {
        const drinkDiv = document.createElement('div');
        drinkDiv.classList.add('ordered-item');
        drinkDiv.innerHTML = `
            <h4>Bebida ${index + 1}</h4>
            <p>Tipo: ${drink.bebida}</p>
            <p>Quantidade: ${drink.quantidadeBebida}</p>
        `;
        ordered-itens.appendChild(drinkDiv);
    }); 
};