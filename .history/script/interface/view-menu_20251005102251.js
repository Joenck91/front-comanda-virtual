/* ********FUNÇÃO QUE CRIA O CARDÁPIO ******** */


export default function viewMenuBox (menu){
  const box = document.getElementById('view-menu-box');
        box.innerHTML = ''; // Limpa o conteúdo da div

        //Cria o titula Pizzas
        const titlePizza = document.createElement('h3');
        titlePizza.classList.add('menu-title');
        titlePizza.textContent = 'Pizzas';
        box.appendChild(titlePizza);

        const exit = document.createElement('button');
        exit.type ='button';
        exit.classList.add('menu-exit')
        exit.classList.add('exit-delete')
        exit.id = 'menuExit'; 
        exit.textContent = 'Sair';
        box.appendChild(exit);

        // Cria a lista das pizzas
        menu.pizzas.forEach(pizza => {
          const pizzaDiv = document.createElement('div');
          pizzaDiv.classList.add('menu-item'); // você pode estilizar no CSS

          const pizzaTitle = document.createElement('h4');
          pizzaTitle.textContent = `🍕 ${pizza.name}`;

          const pizzaDesc = document.createElement('p');
          pizzaDesc.classList.add('pizza-description')
          pizzaDesc.textContent = pizza.description;

          pizzaDiv.appendChild(pizzaTitle);
          pizzaDiv.appendChild(pizzaDesc);
          box.appendChild(pizzaDiv);
        });

        //Cria o titulo Bebidas
        const titleDrink = document.createElement('h3');
        titleDrink.classList.add('title');
        titleDrink.textContent = 'Bebidas';
        box.appendChild(titleDrink);

        //Cria a lista das bebidas
        menu.drinks.forEach(drink => {
          const drinkDiv = document.createElement('div');
          drinkDiv.classList.add('item');

          const drinkTitle = document.createElement('h4');
          drinkTitle.textContent = `🥤 ${drink.name} - R$ ${drink.price.toFixed(2)}`;

          drinkDiv.appendChild(drinkTitle);
          box.appendChild(drinkDiv);
        });
};