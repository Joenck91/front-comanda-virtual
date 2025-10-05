// Pega o select de tamanho
const selectSize = document.getElementById("size");

// Variável para armazenar o tamanho selecionado
let sizeChecked = "";

//Função para exibir os sabores de acordo com a escolha do tamanho da pizza
function updateFlavor(size) {
    document.querySelector('.flavor_three').style.display = (size === 'GRANDE(3 sabores, 12 fatias, 35cm)' || size === 'GIGANTE(4 sabores, 16 fatias, 40cm)' || size === 'KING(4 sabores, 20 fatias, 45cm)') ? 'flex' : 'none';//Se o tamanho for grande, gigante e king: aparece o terceiro sabor
    document.querySelector('.flavor_four').style.display = (size === 's4' || size === 's5') ? 'flex' : 'none';//Se o tamanho for gigante e king: aparece o quarto sabor.
}

export default function chooseSizes (){
        // Escuta quando o usuário muda a opção
    selectSize.addEventListener("change", (event) => {
        sizeChecked = event.target.value; // aqui está o valor selecionado
        updateFlavor(sizeChecked);
    });
};
