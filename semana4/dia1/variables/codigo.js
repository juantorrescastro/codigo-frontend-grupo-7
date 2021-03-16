//este es un comentario de una línea

/*
este es un comentario
multilineas en Javascript
*/

//variable detipo texto
let nombre ="Juan"

/*
let sistemaOperativo="linux"
console.log(type(nombre))

alert("Mi segundo nombre es ",nombre," y mi SO favorito es ",
sistemaOperativo);
*/


let miEdad=36
let miPeso=75.400

//1.crea una variable para mi altura
//2.creo una variable para mi peso
//3.creo una variable que divida

let altura=1.70
let peso=75.400

//bmi = indice de masa corporal
let bmi = (peso)/(altura**2)

alert(bmi)



let a=6
let b=10

let suma=a+b
console.log(suma)

let resta=b-a
console.log(resta)

let division = b/a
console.log(division);

let multiplicacion = a*b
console.log(multiplicacion)

let potenciacion=a**b;
console.log(potenciacion);

let radicacion = a**0.5;
console.log(radicacion);

let modulo = a%b;
console.log(modulo);



let fahrenheit=100;

let celsius=((fahrenheit-32)*(5/9));

console.log("Fahrenheit a Celsius: ",celsius)


let josue = {
    nombre: "Juan",
    apellidoPaterno: "Torres",
    apellidoMaterno: "Castro",
};
/*
let nombreCompleto ='${josue.nombre},
                    ${josue.apellidoPaterno},
                    ${josue.apellidoMaterno}';
                    
                    
                    */

let juan={
    hobbie1: "leer",
    hobbie2: "dibujar",
    mascota: "perro",
    varon: true};

console.log("Datos guardados: Hobbie: ",juan.hobbie1," y ", juan.hobbie2, 
" mi mascota es un: ", juan.mascota," Género masculino: ",juan.varon);


