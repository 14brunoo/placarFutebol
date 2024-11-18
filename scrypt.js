const btnMaistimea = document.getElementById('maistimea')
const btnMenostimea = document.getElementById('menostimea')

btnMaistimea.addEventListener('click', aumentartimea);

function aumentartimea(){
    document.getElementById('quadrado2').innerText+=1;
    console.log('oi');
}