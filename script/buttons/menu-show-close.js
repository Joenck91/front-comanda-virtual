
//Função para mostrar cardápiio e fechar cardápio
export default function menuShowClose (){
    const viewMenu = document.getElementById('view-menu');//Identifica o botão com "Ver cardápio"
    const closeMenu = document.getElementById('menuExit');//Identifica botão "sair" do cardápio.
    const menuBox = document.querySelector('.view-menu-box');//Identifica div que mostra cardápio

    viewMenu.addEventListener('click',()=>{//Escuta o evento de clique no botão "Ver cardápio"
        console.log("abrir")
        menuBox.style.display = 'flex';
    });
    closeMenu.addEventListener('click', ()=>{//Escuta o evento clique no botão "sair"
       console.log("sair");
        menuBox.style.display = 'none';
    });
};