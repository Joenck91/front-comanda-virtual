
//função que mostra os itens pedidos na interface
export default function showItems(notedOrder){
    const orderedItemsDiv = document.getElementById('ordered-items');
    orderedItemsDiv.innerHTML = ''; // Limpa o conteúdo anterior

    // Mostra pizzas
    notedOrder.pizzas.forEach((pizza, index) => {
        const pizzaDiv = document.createElement('div');
        pizzaDiv.classList.add('ordered-item');
        pizzaDiv.innerHTML = `
            <h5>Pizza ${index + 1}</h5>
            <p>Pizza: ${pizza.pizza}</p>
            <p>Borda: ${pizza.borda}</p>
            <p>Sabor(es): ${pizza.sabores.join(', ')}</p>
        `;
        orderedItemsDiv.appendChild(pizzaDiv);
    });

    // Mostra bebidas
    notedOrder.drinks.forEach((drink, index) => {
        const drinkDiv = document.createElement('div');
        drinkDiv.classList.add('ordered-item');
        drinkDiv.innerHTML = `
            <h5>Bebida ${index + 1}</h5>
            <p>Bebida: ${drink.bebida}</p>
            <p>Quantidade: ${drink.quantidadeBebida}</p>
        `;
        orderedItemsDiv.appendChild(drinkDiv);
    });
};