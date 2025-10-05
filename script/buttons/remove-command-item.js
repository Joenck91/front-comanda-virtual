//função que remove itens da comanda

import { notedOrder } from "../command/orders.js";
import showItems from "../interface/command-box/show-items.js";

export default function removeCommandItem(){
    // Adiciona o listener ao 'document' em vez de um elemento específico
    document.addEventListener('click', (e) => {
        // Verifica se o elemento clicado (e.target) está DENTRO de #ordered-items
        // e se ele tem a classe 'remove-button'
        if (e.target.closest('#ordered-items') && e.target.classList.contains('remove-button')) {
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