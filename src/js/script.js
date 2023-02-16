
const button = document.querySelector('.button-field');

const addLoading = () =>{
    button.innerHTML = '<img src="./src/img/loading.png" class="loading">';
}

const removeLoading = () =>{
    button.innerHTML = '<button class="button-submit" type="submit">Enviar</button>';
}

const handleSubmit = (event) => {
    event.preventDefault();
    addLoading();
    const Nome = document.querySelector('input[name=name]').value;
    const Email = document.querySelector('input[name=email]').value; 

    fetch('https://api.sheetmonkey.io/form/6ukGGnNkotTaTPig461QX6',{

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
        },
        body: JSON.stringify({Nome, Email}),
    }).then(() => removeLoading());
    
}

document.querySelector('form').addEventListener('submit', handleSubmit);

const botaoExcell = document.querySelector(".button-excell");
const botaoFecharModal = document.querySelector(".fechar-modal");
const tabela = document.getElementById("table");
const modal = document.querySelector(".modal");
const linkTable = table.src;

function alternarModal(){
	modal.classList.toggle("aberto");
}

botaoExcell.addEventListener("click", () => {
	alternarModal();
	tabela.setAttribute("src", linkTable);
});

botaoFecharModal.addEventListener("click", () => {
	alternarModal();
	tabela.setAttribute("src", "");
});