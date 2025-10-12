// Funções para preencher os selects
function showsizes(sizes) {
    const selectSizes = document.getElementById("size");
    sizes.forEach(size => {
        const option = document.createElement("option");
        option.value = size.id;
        option.textContent = `${size.name} - R$${size.price.toFixed(2)}`;
        selectSizes.appendChild(option);
    });
}

function showFlavors(pizzas) {
    const selectsFlavors = [
        document.getElementById("flavor_one"),
        document.getElementById("flavor_two"),
        document.getElementById("flavor_three"),
        document.getElementById("flavor_four")
    ];

    selectsFlavors.forEach(select => {
        pizzas.forEach(pizza => {
            const option = document.createElement("option");
            option.value = pizza.id;
            option.textContent = pizza.name;
            select.appendChild(option);
        });
    });
}

function showBorders(borders) {
    const selectBorder = document.getElementById("border");
    borders.forEach(border => {
        const option = document.createElement("option");
        option.value = border.id;
        option.textContent = `${border.name} - R$${border.price.toFixed(2)}`;
        selectBorder.appendChild(option);
    });
}

function showDrinks(drinks) {
    const selectDrinks = document.querySelector('.command-drink select');
    drinks.forEach(drink => {
        const option = document.createElement("option");
        option.value = drink.id;
        option.textContent = `${drink.name} - R$${drink.price.toFixed(2)}`;
        selectDrinks.appendChild(option);
    });
}

export {showBorders, showsizes, showFlavors, showDrinks};