// Pega o select de tamanho
const selectSize = document.getElementById("size");

// Variável para armazenar o tamanho selecionado
let sizeChecked = "";

//Função para exibir os sabores de acordo com a escolha do tamanho da pizza
function updateFlavor(size) {
    document.querySelector('.flavor_three').style.display = (size === 's3' || size === 's4' || size === 's5') ? 'flex' : 'none';//Se o tamanho for medio e largo, aparece o terceiro sabor
    document.querySelector('.flavor_four').style.display = (size === 's4' || size === 's5') ? 'flex' : 'none';//Se o tamanho for grande, aparece o quarto sabor.
}

export default function chooseSizes (){
        // Escuta quando o usuário muda a opção
    selectSize.addEventListener("change", (event) => {
        sizeChecked = event.target.value; // aqui está o valor selecionado
        updateFlavor(sizeChecked);
    });
};
