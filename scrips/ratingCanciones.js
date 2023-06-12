
import {agregarPersona,Persona,Preferencia,creaOption,creaSelect,creaForm} from "./funcionesRating.js";
// nodos
const body = document.getElementById("body");
const menu = document.getElementById("menu");
const fragment = document.createDocumentFragment();
//crea un array de personas
let Personas = [];

//funcionalidad del boton agregar persona
menu.children[0].children[0].addEventListener("click",(e)=>{
    e.preventDefault();
    while(body.children[2]){
        body.children[2].remove();
    }
    body.append(agregarPersona());
    body.children[2].children[0].addEventListener('submit',(e)=>{
        e.preventDefault()
        console.dir(e.target.children)
        let nombre = e.target.nombre.value;
        let identificacion = e.target.identificacion.value;
        let fechaNacimiento = e.target.fechaNacimiento.value;
        let email = e.target.email.value;
        let ciudadResidencia = e.target.ciudadResidencia.value;
        let ciudadOrigen = e.target.ciudadOrigen.value;
        let artista1 = e.target.artista1.value;
        let titulo1 = e.target.titulo1.value;
        let artista2 = e.target.artista2.value;
        let titulo2 = e.target.titulo2.value;
        let artista3 = e.target.artista3.value;
        let titulo3 = e.target.titulo3.value;
        let persona = new Persona(nombre,identificacion,fechaNacimiento,email,ciudadResidencia,ciudadOrigen
                        ,new Preferencia(artista1,titulo1,artista2,titulo2,artista3,titulo3));
        Personas.push(persona);
        alert("datos guardados correctamente");    
    })
})

//funcionalidad del boton mostrar informacion 
menu.children[1].children[0].addEventListener('click',(e)=>{
    e.preventDefault();
    if(Personas != "" && Personas != null){
   while(body.children[2]){
        body.children[2].remove();
    }
    const select = creaSelect();
    const form = creaForm();
    for(let i = 0 ;i<Personas.length;i++){
        select.append(creaOption(i,Personas[i]));
    }
    form.append(select);
    const div  = document.createElement("div");
    div.append(form);
    div.classList.add("contenedor-form-select");
    body.append(div);
    console.dir(form)
    form.children[0].addEventListener("click",(e)=>{
        e.preventDefault();
        while(body.children[3]){
            body.children[3].remove();
        }
        const contenedorRespuesta = document.createElement("div");
        const respuesta = document.createElement("p");
        respuesta.textContent = Personas[Number(form.children[1].value)];
        contenedorRespuesta.append(respuesta);
        contenedorRespuesta.classList.add("contenedor-respuesta");
        body.append(contenedorRespuesta);
        console.log(body.children);
    })
   }else{
    alert("no hay datos para mostrar");
   }
})
