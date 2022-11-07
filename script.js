//queryselector() regresa el primer elemento que calza un selector CSS
const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
//btn es el nombre de la variable
//btn.addEventListener('click', btnOnClick);

//function btnOnClick(){
 //  const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
  //  pResult.innerText = 'Resultado: ' + sumaInputs;
//}

btn.addEventListener('click', sumarInputValues);

function sumarInputValues(){
    //console.log(event);
    //event.preventDefault();
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = 'Resultado: ' + sumaInputs;
}
