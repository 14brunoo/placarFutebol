//aumenta a pontuação do time a e diminui
const btnMaistimea = document.getElementById('maistimea')
const btnMenostimea = document.getElementById('menostimea')

btnMaistimea.addEventListener('click', aumentartimea);

function aumentartimea(){
    document.getElementById('quadradotimea').innerText = (parseInt(document.getElementById('quadradotimea').innerText) + 1);
}

btnMenostimea.addEventListener('click', diminuirtimea);

function diminuirtimea(){
    document.getElementById('quadradotimea').innerText = (parseInt(document.getElementById('quadradotimea').innerText) - 1);
}

//aumenta a pontuação do time b e diminui
const btnMaistimeb = document.getElementById('maistimeb')
const btnMenostimeb = document.getElementById('menostimeb')

btnMaistimeb.addEventListener('click', aumentartimeb);

function aumentartimeb(){
    document.getElementById('quadradotimeb').innerText = (parseInt(document.getElementById('quadradotimeb').innerText) + 1);
}

btnMenostimeb.addEventListener('click', diminuirtimeb);

function diminuirtimeb(){
    document.getElementById('quadradotimeb').innerText = (parseInt(document.getElementById('quadradotimeb').innerText) - 1);
}

//colocar uma função para quando clicar no botão de iniciar, inserir o número 0 nos dois placares
const btnComecar = document.getElementById('comecar')

btnComecar.addEventListener('click', comecar);

function comecar(){
    document.getElementById('quadradotimea').innerText = 0;
    document.getElementById('quadradotimeb').innerText = 0;
}

//resetar o placar
const btnResetar = document.getElementById('resetar')

btnResetar.addEventListener('click', resetar);

function resetar(){
    document.getElementById('quadradotimea').innerText = null;
    document.getElementById('quadradotimeb').innerText = null;
}

