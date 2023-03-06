const form = document.getElementById('formulario');
const ulLista = document.getElementById('lista');

const inTitle = document.getElementById('titulo');
const inLinguage = document.getElementById('linguagem');
const inCategory = document.getElementById('categoria');
const inDescription = document.getElementById('descricao');
const inYoutube = document.getElementById('youtube');

const pTotal = document.getElementById('total');
const pFrontEnd = document.getElementById('frontEnd');
const pBackEnd = document.getElementById('backEnd');
const pFullStack = document.getElementById('fullStack');
const pSoftSkill = document.getElementById('softSkill');


const inSearch = document.getElementById('in-pesquisa');
const btnSearch = document.getElementById('pesquisar');
const btnClear = document.getElementById('limpar');

let itemLista = [];

let confirmEdit = null;

function saveList(){
    const itemJson = JSON.stringify(itemLista);
    localStorage.setItem('listSave',itemJson);
}

function returnList(){
    const itemJson = localStorage.getItem('listSave');
    if (itemJson){
        itemLista = JSON.parse(itemJson);
    }

    updateList(itemLista);
}

// Cria html do item e insera na lista
function createItemElement(item){

const elem = document.createElement('li');

const title = document.createElement('h3');
title.innerText = item.Titulo;
elem.appendChild(title);

const linguage = document.createElement('p');
linguage.innerHTML = `<p><strong>Linguagem:</strong></p> ${item.Linguagem}`;
elem.appendChild(linguage);

const category = document.createElement('p');
category.innerHTML = `<p><strong>Categoria:</strong></p> ${item.Categoria}`;
elem.appendChild(category);

const description = document.createElement('p');
description.innerHTML = `<p><strong>Descrição:</strong></p>${item.Descrição}`;
elem.appendChild(description);

const youtube = document.createElement('div');
youtube.innerHTML = `<a href="${item.Youtube}"><button class="linkYoutube">Vídeo</button></a>` ;
elem.appendChild(youtube);

elem.querySelector('.linkYoutube').addEventListener('click', () => {
    window.open(item.Youtube,'_blank').focus();
})

const edit = document.createElement('div');
edit.innerHTML = `<div class="btnList"><button class="btnEdit"></button></div>`;
elem.appendChild(edit);

const remove = document.createElement('div');
remove.innerHTML = `<div class="btnList"><button class="btnRemove"></button></div>`;
elem.appendChild(remove); 

elem.querySelector('.btnRemove').addEventListener('click', () => {
    if(window.confirm("Você deseja mesmo excluir?")){
    removeItem(item);    
    }
})
elem.querySelector('.btnEdit').addEventListener('click', () => { 
alert(`As informações da dica selecionada para edição foram enviadas para a barra lateral.
Realize as devidas edições e clique em Salvar para finalizar.`);
    editItem(item);
})
 

return elem;
}

//Cria o item,joga na lista e limpa o formulario
function addItem(){
    
    const newItem = {

        Titulo: inTitle.value,
        Linguagem: inLinguage.value,
        Categoria: inCategory.value ,
        Descrição: inDescription.value,
        Youtube: inYoutube.value}
    
    if(!confirmEdit)  {  
    itemLista.push(newItem);
    } else {
        //salva o edit
        confirmEdit.Titulo = newItem.Titulo;
        confirmEdit.Linguagem = newItem.Linguagem;
        confirmEdit.Categoria = newItem.Categoria;
        confirmEdit.Descrição = newItem.Descrição;
        confirmEdit.Youtube = newItem.Youtube;

        confirmEdit = null;
    }

    form.reset();
    updateList(itemLista);  
    saveList();
   
    
    
}

function editItem(itemEdit){
    
    const {Titulo, Linguagem, Categoria, Descrição, Youtube} = itemEdit
    inTitle.value = Titulo;
    inLinguage.value = Linguagem;
    inCategory.value = Categoria;
    inDescription.value = Descrição;
    inYoutube.value = Youtube;    

    confirmEdit = itemEdit;

}

function removeItem(itemRemove){
    itemLista = itemLista.filter((item) => item !== itemRemove);
    updateList(itemLista)
    saveList();
    
    
}

//Atualiza a Lista
function updateList(list) {
    ulLista.innerHTML = '';
   

    list.forEach((item) =>{
        const elem = createItemElement(item);
        ulLista.appendChild(elem);
    })

    updateStatics();
}

updateList(itemLista);

function updateStatics(){
    
    const total = itemLista.reduce((acc,item) =>{
        if(item.Titulo){
            return acc + 1;
        }

    },0 )
   
    const totalFrontEnd = itemLista.reduce((acc,item) =>{
        if(item.Categoria === 'FrontEnd'){
            return acc + 1;
        }
        else{
            return acc ;
        }

    },0 )

    const totalBackEnd = itemLista.reduce((acc,item) =>{
        if(item.Categoria === 'BackEnd'){
            return acc + 1;
        }
        else{
            return acc ;
        }

    },0 )

    const totalFullStack = itemLista.reduce((acc,item) =>{
        if(item.Categoria === 'FullStack'){
            return acc + 1;
        }
        else{
            return acc ;
        }

    },0 )

    const totalSoftSkill = itemLista.reduce((acc,item) =>{
        if(item.Categoria === 'SoftSkill'){
            return acc + 1;
        }
        else{
            return acc ;
        }

    },0 )

    pTotal.innerText = total;
    pFrontEnd.innerText = totalFrontEnd;
    pBackEnd.innerText = totalBackEnd;
    pFullStack.innerText = totalFullStack;
    pSoftSkill.innerText = totalSoftSkill;
    
}



//botao salvar do formulario
form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Salvo com sucesso');
    addItem(); 
    saveList();

})

form.addEventListener('reset', (event) => {
    confirmEdit = null;
})

//Filtra item da lista e chama a funçao para atualizar na tela
btnSearch.addEventListener('click', () => {    
    const filter = itemLista.filter((item) => item.Titulo.toLocaleLowerCase().includes(inSearch.value.toLocaleLowerCase()) 

    )
    updateList(filter);
    
    })

btnClear.addEventListener('click', ()=> {
    inSearch.value ='';      
    returnList();   
})

returnList();
    



