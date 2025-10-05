// Função para exibir os itens do pedido na div que mostra o pedido
function showItemsPizza(order) {
    const orderedItemsContainer = window.document.getElementsByClassName('ordered-itens')[0];
    orderedItemsContainer.innerHTML = ''; // Limpa o conteúdo existente

    // Exibe pizzas
    order.pizzas.forEach((pizza, index) => {
        const pizzaDiv = window.document.createElement('div');
        pizzaDiv.classList.add('ordered-pizza');
        pizzaDiv.innerHTML = `
            <h3>Pizza ${index + 1}</h3>
            <p><strong>Tamanho:</strong> ${pizza.pizza}</p>
            <p><strong>Borda:</strong> ${pizza.borda}</p>
            <p><strong>Sabor(es):</strong> ${pizza.sabores.join(', ')}</p>
        `;
        orderedItemsContainer.appendChild(pizzaDiv);
    });
}
function showItemsDrinks(order) {
    const orderedItemsContainer = window.document.getElementsByClassName('ordered-itens')[0];
    orderedItemsContainer.innerHTML = ''; // Limpa o conteúdo existente
    // Exibe bebidas
    order.drinks.forEach((drink, index) => {
        const drinkDiv = window.document.createElement('div');
        drinkDiv.classList.add('ordered-drink');
        drinkDiv.innerHTML = `
            <h3>Bebida ${index + 1}</h3>
            <p><strong>Tipo:</strong> ${drink.bebida}</p>
            <p><strong>Quantidade:</strong> ${drink.quantidadeBebida}</p>
        `;
        orderedItemsContainer.appendChild(drinkDiv);
    });
}

export { showItemsPizza, showItemsDrinks };