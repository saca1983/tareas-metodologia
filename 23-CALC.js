'use strict';

// crear la funcion sumar;
let  suma =function(a,b){
    suma= a + b;
    alert("El resultado es" + suma)
    }
// funcion resta
let resta = (a, b) => a - b;

// Funcion Calc

function  calc(op,fnSum , fnRest) {

let number1 = Number(prompt("ingrese el primer numero: "));
let number2 = Number(prompt("ingrese el segundo nuemro: ")); 
if (op === "suma"){
fmSum(number1, number2);
}else{

    alert (fnRest(number1, number2));
    }

    }

    //llamada funcion

    calc ("suma",suma, resta);