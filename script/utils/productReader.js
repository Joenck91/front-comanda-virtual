//Função que lê o arquivo JSON e retorna os produtos de acordo com o ID
export default async function findProductById(menu,id) {
    return menu.find(item => item.id === id);//verifica itempor item domenu até encontrar o item com o id especificado e cria um objeto com as prpriedades.

}