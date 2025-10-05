import viewMenuBox from "./interface/view-menu.js";
import menuShowClose from "./buttons/menu-show-close.js";
import * as inputsContent from "./interface/inputs-contents.js"
import chooseSize from "./interface/choose-sizes.js";
import * as writingOrders from "./command/orders.js"
import { showItems } from "./interface/command-box/show-items.js";

//Funções que precisam acessar json.
document.addEventListener('DOMContentLoaded', ()=>{
    // Faz uma requisição GET para a rota /api/menu para buscar os dados do cardápio.
    fetch('./data/menu.json')
    .then(res => res.json()) // Converte a resposta para JSON.
    .then(menu => {
        

        viewMenuBox(menu);  //Carrega menu.
        menuShowClose();    //Abre e fecha cardápio.
        inputsContent.showBorders(menu.borders);//Opções de bordas
        inputsContent.showsizes(menu.sizes);//Opções de tamanhos
        inputsContent.showFlavors(menu.pizzas);//Opções de pizzas
        inputsContent.showDrinks(menu.drinks);  //Opções de bebidas
        chooseSize();//Define quantidade de sabores de acordo com o tamanho selecionado.
        writingOrders.writingOrder(menu);//Armazena as opçoes escolhidas pelo usuário na variável orders
        showItems(writingOrders.notedOrder);//Mostra os itens pedidos na comanda.


    })
    .catch(err => console.error('Erro ao carregar menu:', err));// Captura e exibe no console qualquer erro ocorrido ao carregar o menu.
});

