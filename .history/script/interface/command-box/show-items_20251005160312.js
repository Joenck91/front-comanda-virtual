
//função que mostra os itens pedidos na interface
export default function showItems(notedOrder){
    const orderedItemsDiv = document.getElementById('ordered-items');
    orderedItemsDiv.innerHTML = ''; // Limpa o conteúdo anterior

    // Mostra pizzas
    notedOrder.pizzas.forEach((pizza, index) => {
        const pizzaDiv = document.createElement('div');
        pizzaDiv.classList.add('ordered-item');
        pizzaDiv.innerHTML = `
            <h4>Pizza ${index + 1}</h4>
            <p>Pizza: ${pizza.pizza}</p>
            <p>Borda: ${pizza.borda}</p>
            <p>Sabor(es): ${pizza.sabores.join(', ')}</p>
            <button class="remove-button" data-index="${index}" data-type="pizza"> REMOVE </button>
        `;
        orderedItemsDiv.appendChild(pizzaDiv);
    });

    // Mostra bebidas
    notedOrder.drinks.forEach((drink, index) => {
        const drinkDiv = document.createElement('div');
        drinkDiv.classList.add('ordered-item');
        drinkDiv.innerHTML = `
            <h4>Bebida ${index + 1}</h4>
            <p>Bebida: ${drink.bebida}</p>
            <p>Quantidade: ${drink.quantidadeBebida}</p>
            <button class="remove-button" data-index="${index}" data-type="drink"> REMOVE </button>
        `;
        orderedItemsDiv.appendChild(drinkDiv);
    });
};