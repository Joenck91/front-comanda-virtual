import showItems from "../interface/command-box/show-items.js";
import calculateTotalPrice from '../utils/priceCalculator.js';

let notedOrder = {
    pizzas: [],
    drinks: []
};

function writingOrder(menu) {
    // Captura o envio do formulário de pizza
    const formPizza = document.querySelector('.unit-pizza-box');
    formPizza.addEventListener('submit', (e) => {
        e.preventDefault();

        const pizzaOrder = {
            pizza: document.getElementById('size').value,
            borda: document.getElementById('border').value,
            sabores: [
                document.getElementById('flavor_one').value,
                document.getElementById('flavor_two').value,
                document.getElementById('flavor_three').value,
                document.getElementById('flavor_four').value
            ].filter(s => s)
             .map(id => parseInt(id, 10)),
        };

        notedOrder.pizzas.push(pizzaOrder);
        showItems(notedOrder);
        updateTotal();
    });

    //Captura o envio do formulário de bebidas
    const formDrinks = document.querySelector('.command-drink');
    formDrinks.addEventListener('submit', (e) => {
        e.preventDefault();

        const drinkOrder = {
            bebida: document.querySelector('.command-drink select').value,
            
            quantidadeBebida: parseInt(document.getElementById('unit-drink').value, 10)
        };

        notedOrder.drinks.push(drinkOrder);
        showItems(notedOrder);
            updateTotal();
    });
};


async function updateTotal() {
    const totalValue = await calculateTotalPrice(notedOrder);
    
    // Supondo que você tenha um elemento com id="total-price" no seu HTML
    const totalElement = document.getElementById('total-price');
    if (totalElement) {
        // .toFixed(2) garante que o preço sempre tenha duas casas decimais (ex: 55.00)
        totalElement.textContent = `R$ ${totalValue.toFixed(2).replace('.', ',')}`;
    }
}
export { writingOrder, notedOrder };