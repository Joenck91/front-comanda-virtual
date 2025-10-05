import * as showItems from "../interface/command-box/show-items.js";
//Array que guarda todos os pedidos da sessão
let notedOrder = {
    pizzas: [],
    drinks: []
};

function writingOrder (menu){
    // Captura o envio do formulário de pizza
    const formPizza = document.querySelector('.unit-pizza-box');
    formPizza.addEventListener('submit', (e) => {
        e.preventDefault(); // evita reload da página
        //código aqui

        const pizzaOrder = {
            pizza: document.getElementById('size').value,
            borda: document.getElementById('border').value,
            sabores: [
                document.getElementById('flavor_one').value,
                document.getElementById('flavor_two').value,
                document.getElementById('flavor_three').value,
                document.getElementById('flavor_four').value
            ].filter(s => s), // remove strings vazias
        };

        // Adiciona ao array de pedidos
        notedOrder.pizzas.push(pizzaOrder);

        // Adiciona ao display dos itens pedidos
        showItems.showItemsPizza(notedOrder);
        
        console.log(notedOrder);


    });

    //Captura o envio do formulário de bebidas
    const formDrinks = document.querySelector('.command-drink');
    formDrinks.addEventListener('submit', (e) =>{
        e.preventDefault(); //evita reload da página
        //código aqui
        const drinkOrder = {
            bebida: document.querySelector('.command-drink select').value,
            quantidadeBebida: parseInt(document.getElementById('unit-drink').value, 10)
        };

        // Adiciona ao array de pedidos
        notedOrder.drinks.push(drinkOrder);

        // Adiciona ao display dos itens pedidos
        showItems.showItemsDrinks(notedOrder);

        console.log(notedOrder);
    });

};

export {writingOrder, notedOrder};