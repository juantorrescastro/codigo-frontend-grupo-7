
/* let cancion="salsa"

if(cancion===""){
    console.log()
}else if(cancion===){
    console.log()
} */


/* function imprimeMiNombre(nombre){
    let miNombre = "Josue"

    if (miNombre===""){
        miNombre='Hey!, dato incorrecto!'

    }else
    { 
        miNombre=`Mi nombre es: ${nombre}`
    }
    return miNombre;
}

console.log(imprimeMiNombre()) */

function clima(tipoClima){
    if(tipoClima===undefined) {
        return "Debes ingresar un valor válido";
    }
    if(tipoClima==="") {
        return "Ingresa un tipo de clima";
    }
    if(tipoClima==="cálido") {
        return "Este tipo de climas, como su nombre lo indica, se caracterizan por unas temperaturas elevadas, y se encuentran ubicados en zonas con latitudes bajas. ";
    }
    if(tipoClima==="templado") {
        return "En este tipo de climas las temperaturas por lo general son moderadas, inclinándose más hacia las temperaturas frías en algunas épocas del año. ";
    }
    if(tipoClima==="polar") {
        return "Estos son los climas donde la predominancia del frío es completa. ";
    }
}

console.log(clima())
console.log(clima("cálido"))
console.log(clima("templado"))
console.log(clima("polar"))
console.log(clima(""))



let seleccionar = document.querySelector('select')
let parrafo = document.querySelector('p')
seleccionar.addEventListener('change',establecerClima);
function establecerClima() {
    let eleccion = seleccionar.value;
    if (eleccion==="soleado"){
        parrafo.textContent="El dia esta agradable"
    }else if(eleccion==="lluvioso"){
        parrafo.textContent="Esta lloviendo, mejor quedate en casa"
    }else if(eleccion==="nevado"){
        parrafo.textContent="Si sales trata de abrigarte"
    }else{
        parrafo.textContent ="NO hace falta que salgas con lente de sol"
    }       
}
