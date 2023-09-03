

// Ejercicio numero 1 funcion q muestra si el numero es par o impar 


function ParoImpar(numero) {
    
    if (numero % 2 === 0) {
        console.log("ejer-1 ==> " + numero + " es un numero par");
    } 
    
    else {
        console.log("ejer-1 ==> " + numero + " es un numero impar");
    }
}
  
    ParoImpar(24); 
    ParoImpar(17); 

  
// Ejercicio numero 2 indicar cual numero es mayor o si son iguales 

function mayorIgual (numero1, numero2) {

    if (numero1 > numero2) {
        console.log("ejer-2 ==> " + numero1 + " es mayor que " + numero2);
    }

    else if (numero1 < numero2) {
        console.log("ejer-2 ==> " + numero1 + " es menor que " + numero2);
    }

    else {
        console.log("ejer-2 ==> " + numero1 + " y " + numero2 + " son iguales");
    }
}

mayorIgual (18, 16);
mayorIgual (3, 20);
mayorIgual (5, 5);


// Ejercicio 3 identificar multiplo de cinco 

function Multiplode5 (numero) {

    if (numero % 5 === 0) {
        console.log("ejer-3 ==> " + numero + " es multiplo de 5");
    }

    else {
        console.log("ejer-3 ==> " + numero + " no es multiplo de 5");
    }
}

Multiplode5 (10);
Multiplode5 (19);
Multiplode5 (100);


// Ejercicio 4 imprimir desde el 0 hasta el numero ingresado

function Numeros (numero) {

    for (let i = 0; i <= numero; i++) {
        console.log("ejer-4 ==> " + i);
    }
}

Numeros(6);


//ejercicio 5 imprimir la palabra por la cantidad ingresada

function ImprimirPalabra (palabra, numero) {
    
    for (let i = 0; i < numero; i++) {
        console.log("ejer-5 ==> " + palabra);
    }
}

ImprimirPalabra("repite", 7);


// Ejercicio 6 imprimir todos los valores que contiene el array

function imprimirArray (array) {
    
    for (let i = 0; i < array.length; i++) {
        console.log("ejer-6 ==> " + array[i]);
    }
}
  
const miArray = [2, 4, 7, 9, 11];

imprimirArray(miArray);
  


// ejercicio 7 imprimir array excepto el valor en la quinta posicion 

function excluirPosicion5 (array) {
    
    for (let i = 0; i < array.length; i++) {

        if (i !== 4) {
        console.log("ejer-7 ==> " + array[i]);
        }

    }
}
  
const arrayexcluyente = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

excluirPosicion5 (arrayexcluyente);


// Ejercicio 8 multiplicar cada valor del array por un numero e imprimir el resultado


function multiplicarArray(array, numero) {

    for (let i = 0; i < array.length; i++) {

      const resultado = array[i] * numero;

      console.log("ejer-8 ==> " + resultado);
    }
  }
  
  const miarrayX = [1, 2, 3, 4, 5];

  multiplicarArray(miarrayX, 3);
  
