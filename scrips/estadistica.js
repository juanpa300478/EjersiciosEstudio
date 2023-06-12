import { Persona,agregarElementos,evaluacionEdadmenos18,evaluacionEdadmas18,evaluacionEdadmas60,evaluarEdadMasbaja,promedio} from "./funcionesEstadistica.js";

//agregando elementos del dom
const datos = document.getElementById("datos");
const tabla = document.getElementById("table");
const columna = document.querySelector('.columnas-1');
const columna1 = document.querySelector('.columnas-2');
const columna2 = document.querySelector('.columnas-3');
const textoTabla = document.getElementById("texto-tabla");
const textoGrafico = document.getElementById("texto-grafico");
const textoResumen = document.getElementById("texto-resumen");
const fragment = document.createDocumentFragment();
//varibles asignacion de edad
let mas18;
let menos18 = 0;
let mas60;


let Personas = [];

//recuperar parametos de datos
datos.children[9].addEventListener("click",()=>{
    let nombre = datos.children[2].value;
    let edad = Number(datos.children[6].value);
    if(edad > 1 && edad < 120 ){
        let persona = new Persona(nombre,edad);
        Personas.push(persona);
    }else{
        alert("los datos no son correctos debe suministrar una edad mayor a 1 y menor a 120");
    }
    agregar(Personas)
    while(tabla.children[1]){
        tabla.removeChild(tabla.children[1]);
    }
    tabla.append(fragment);
    menos18 = evaluacionEdadmenos18(Personas);
    mas18 = evaluacionEdadmas18(Personas);
    mas60 = evaluacionEdadmas60(Personas);
    //cambiamos el texto en el parrafo de la tabla
    textoTabla.children[0].textContent = Personas.length;
    columna.textContent = menos18;
    columna1.textContent = mas18;
    columna2.textContent = mas60;
    //controla el heig de las barras del grafico
    columna.style.height = `${menos18*7}%`;
    columna1.style.height = `${mas18*7}%`;
    columna2.style.height = `${mas60*7}%`;
    //cambiamos el texto en el parrafo de el grafico
    textoGrafico.children[0].textContent = menos18;
    textoGrafico.children[1].textContent = mas18;
    textoGrafico.children[2].textContent = mas60;
    //evaluamos la edad mas baja y mas alta
    let edadBajayAlta = evaluarEdadMasbaja(Personas);
    textoResumen.children[0].textContent = edadBajayAlta[0];
    textoResumen.children[1].textContent = edadBajayAlta[1];
    textoResumen.children[2].textContent = promedio(Personas);
})


const agregar = (elemento) =>{
    elemento.forEach(element => {
        fragment.append(agregarElementos(element.nombre,element.edad));
    });
}

