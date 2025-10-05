//função que remove itens da comanda

import { notedOrder } from "../command/orders";
import showItems from "../interface/command-box/show-items.js";

export default function removeCommandItem(){
    const orderedItemsDiv = document.getElementById('ordered-items');

    orderedItemsDiv.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-button')) {
            const index = parseInt(e.target.getAttribute('data-index'), 10);
            const type = e.target.getAttribute('data-type');

            if (type === 'pizza') {
                notedOrder.pizzas.splice(index, 1);
            } else if (type === 'drink') {
                notedOrder.drinks.splice(index, 1);
            }

            // Atualiza a exibição dos itens pedidos
            showItems(notedOrder);

            console.log(notedOrder);
        }
    });
}       
