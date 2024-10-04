/* ej1.1 */
let cadena = "Hola máquina!";
console.log(cadena);

/* ej1.2 */
let edad = 18;
console.log(edad);

/* ej1.3 */
let booleano = true;
console.log(booleano);

/* ej1.4 */
let nulo = null;
console.log(nulo);

/* ej1.5 */
const lapiz = {tamaño:12 , marca:"juan", color:"rojo"};
console.log(lapiz);

/* ej1.6 */
const nombreCiudades = ["Jerez", "Sevilla", "Madrid", "Barcelona"];
console.log(nombreCiudades);

/* ej1.7 */
let colorFav = "azul";
let nuevoColor = colorFav.replace("azul","verde");
console.log(colorFav+" "+nuevoColor);

/* ej 1.8 */
let sinValor;
let nulo2 = null;
console.log(sinValor);
console.log(nulo2);

/* ej1.9 */
let variable1 = "Hola1";

function miFuncion(){
    let variable2="Hola2";
    console.log(variable1);
    console.log(variable2);
}

miFuncion();

console.log(variable1);
/* console.log(variable2); La comento porque si no al seguir cargando me da error, pero en resumen, me da error
porque la variable es local, es decir, no se puede acceder desde afuera del metodo/*

/* ej1.10 */
let variableValida = "Es una variable válida";
let _variableValida = "Es una variable válida";

/* let 1variableInvalida = "Es invalida";
let variable@inválida= "Es inválida"; /* /*Las comento pero si las descomentas ves que da error */

/* ej1.11 */
function suma(num1, num2){
    return num1 + num2;
}

function resta(num1, num2){
    return num1 - num2;
}

function multi(num1, num2){
    return num1 * num2;
}

function divi(num1, num2){
    return num1 / num2;
}

function resto(num1, num2){
    return num1 % num2;
}

function incrementar(num1){
    return num1++;
}

function decrementar(num1){
    return num1--
}

console.log(suma(1,1));
console.log(resta(2,1));
console.log(multi(1,2));
console.log(divi(2,1));
console.log(resto(10,5));
console.log(incrementar(1));
console.log(decrementar(1));

/* ej1.12 */
let cadenaVariasLineas = "Esta cadena tiene varias líneas \nEn esta linea te voy a decir que soy el mejor\tSi hay sol hbay playa";
console.log(cadenaVariasLineas);

/* ej2.1 */
let numero=3;

if(numero>0){
    console.log("Es positivo");
} else if(numero<0){
    console.log("Es negativo");
} else{
    console.log("Es 0");
}

/* ej2.2 */
let edad2=17;

if(edad2>=18 && edad2<=60){
    console.log("Es adulto");
} else if(edad2<18 && edad2>0){
    console.log("Es menor de edad");
} else if(edad2>60){
    console.log("Es anciano");
} else{
    console.log("El numero introducido no es una edad correcta ni razonable");
}

/* ej2.3 */
for(let i=0;i<=4;i++){
    console.log(i);
}

/* ej2.4 */
let contador=0;

while(contador>=0 && contador <=4){
    console.log(contador);
    contador++;
}

/* ej2.5 */
let x=0;

do{
    console.log(x);
    x++;
}while(x>=0 && x<=4);

/* ej2.6 */
for(let i=0;i<5;i++){
    if(i!=3){
        console.log(i);
    } else{
        break;
    }
}

/* ej2.7 */
for(let i=0;i<5;i++){
    if(i!=2){
        console.log(i);
    } else{
        continue;
    }

}

/* ej2.8 */
let opcion = prompt("Ingresa un número del 1 al 12 para saber el mes correspondiente:");

opcion = Number(opcion);

switch(opcion){
    case 1:
        console.log("ENERO");
        break;
    case 2:
        console.log("FEBRERO");
        break;
    case 3:
        console.log("MARZO");
        break;
    case 4:
        console.log("ABRIL");
        break;
    case 5:
        console.log("MAYO");
        break;
    case 6:
        console.log("JUNIO");
        break;
    case 7:
        console.log("JULIO");
        break;
    case 8:
        console.log("AGOSTO");
        break;
    case 9:
        console.log("SEPTIEMBRE");
        break;
    case 10:
        console.log("OCTUBRE");
        break;
    case 11:
        console.log("NOVIEMBRE");
        break;
    case 12:
        console.log("DICIEMBRE");
        break;

    default:
        console.log("EL numero introducido no tiene correspondencia a ningún mes del año")
}

/* ej3.1 */
let radio = prompt("Dime el radio del circulo");
radio=Number(radio);

function calcularArea(radio){
    return Math.PI * radio ^ 2;
}

function calcularPerimetro(radio){
    return 2 * Math.PI * radio;
}

console.log(calcularArea(radio));
console.log(calcularPerimetro(radio));

/* ej 3.2 */
function calcularPotencia(base,exponente){
    return base ** exponente;
}

let resultado=calcularPotencia(2,3);
console.log(resultado); 

/* ej4.1 */
function findLargestNumber(numeros){
    let largo = 0;
    for(let i=0;i<=numeros.length;i++){
        if(i>largo){
            largo = numeros[i];
        }
    }

    return largo;
}

let pregunta = prompt("Cuantos numeros desea añadir");
pregunta = Number(pregunta);

let numeros=[];

for (let i = 1; i <= pregunta; i++) {
    let numero = parseFloat(prompt("Introduce los numeros"));
    numeros.push(numero);
}

let numeroMasAlto=findLargestNumber(numeros);

console.log(numeroMasAlto);

/* ej5.1 */
for(let i=20;i<=30;i++){
    console.log(i);
}

for(let i=30;i<=50;i++){
    if(i%2==0){
        console.log(i);
    }
}

let suma2 = 0;

for(let i=1;i<=50;i++){
    suma2 = suma2 + i;
}

console.log(suma2);

for(let i=0;i<=10;i++){
    console.log("8 x "+i+" = "+(i*8));
}

const nombres = ["Darío", "Vandalo", "Pablo", "Sergio", "Juanma"];

for(let i=0;i<nombres.length;i++){
    console.log(nombres[i]);
}

function imprimirTrianguloAltura9() {
    let altura = 9;
    for (let i = 1; i <= altura; i++) {
        console.log('*'.repeat(i));
    }
}

imprimirTrianguloAltura9();

let sumaPares=0;
for(let i=2;i<=50;i++){
    if(i%2==0){
        sumaPares = sumaPares + i;
    }
}

console.log(sumaPares);

for(let i=30;i>=20;i--){
    console.log(i);
}

let numerosCantidad = prompt("Dime la cantidad de numeros que quieres almacenar en el array");
numerosCantidad = Number(numerosCantidad);

let numerosParaCalcular = [];
let sumaTotal = 0;


function calcularMedia(numerosParaCalcular){
    for(let i=0;i<numerosCantidad;i++){
        let numero3 = parseFloat(prompt("Introduce los numeros"));
        numerosParaCalcular.push(numero3);
    }

    let tamaño = numerosParaCalcular.length;

    for(let i=0;i<numerosParaCalcular.length;i++){
        sumaTotal = sumaTotal + numerosParaCalcular[i];
    }

    return sumaTotal / tamaño;
}

let mediaCreada = calcularMedia(numerosParaCalcular);

console.log(mediaCreada);

