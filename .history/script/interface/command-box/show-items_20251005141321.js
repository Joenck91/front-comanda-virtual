
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
            <p><strong>Tamanho:</strong> ${pizza.pizza}</p>
            <p><strong>Borda:</strong> ${pizza.borda}</p>
            <p><strong>Sabor(es):</strong> ${pizza.sabores.join(', ')}</p>
        `;
        orderedItemsDiv.appendChild(pizzaDiv);
    });

    // Mostra bebidas
    notedOrder.drinks.forEach((drink, index) => {
        const drinkDiv = document.createElement('div');
        drinkDiv.classList.add('ordered-item');
        drinkDiv.innerHTML = `
            <h4>Bebida ${index + 1}</h4>
            <p><strong>Tipo:</strong> ${drink.bebida}</p>
            <p><strong>Quantidade:</strong> ${drink.quantidadeBebida}</p>
        `;
        orderedItemsDiv.appendChild(drinkDiv);
    });
};