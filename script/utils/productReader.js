//Função que lê o arquivo JSON e retorna os produtos de acordo com o ID


// script/utils/productReader.js

let menuData = null; // Usaremos isso como um cache para não carregar o arquivo toda vez

async function getMenu() {
    if (menuData) {
        return menuData; // Retorna os dados do cache se já foram carregados
    }

    try {
        const response = await fetch('/front-comanda-virtual/data/menu.json'); // Cuidado com o caminho aqui!
        if (!response.ok) {
            throw new Error('Não foi possível carregar o menu.json');
        }
        menuData = await response.json();
        console.log('✅ Menu carregado com sucesso:', menuData); 
        return menuData;
    } catch (error) {
        console.error(error);
        return null; // Retorna nulo em caso de erro
    }
}


export default async function findProductById(id) {
    const menu = await getMenu();
    if (!menu) {
        return null;
    }

    // Procura na primeira categoria
    let product = menu.borders.find(item => item.id === id);
    if (product) return product; // Se encontrou, PARA AQUI e retorna

    // Se não, continua para a próxima
    product = menu.sizes.find(item => item.id === id);
    if (product) return product;

    product = menu.pizzas.find(item => item.id === id);
    if (product) return product;

    product = menu.drinks.find(item => item.id === id);
    if (product) return product;

    product = menu.delivery.find(item => item.id === id);
    if (product) return product;

    // Se chegou até aqui, não encontrou em nenhuma lista
    return null;
}