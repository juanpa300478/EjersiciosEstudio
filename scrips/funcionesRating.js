import { crearInputButtom} from "./funciones.js";

const crearInput = (nombreInput,textLabel,type) =>{
    const div = document.createElement("div");
    const label = document.createElement("label");
    const salto = document.createElement("br");
    label.setAttribute("for",nombreInput);
    label.textContent = textLabel;
    const input = document.createElement("input");
    input.setAttribute("name",nombreInput);
    input.setAttribute("type",type);
    div.append(label);
    div.append(salto);
    div.append(input);
    return div;
}
//crea el formulario de los usuarion
const agregarPersona = () =>{
    const div = document.createElement("div");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const form = document.createElement("form");
    div.classList.add("contenedor-form");
    div1.classList.add("contenedor-input-1");
    div2.classList.add("contenedor-input-2");
    form.classList.add("form");
    const nombre = crearInput("nombre","nombre");
    const identificacion = crearInput("identificacion","identidicación","Number");
    const fechaNacimeinto = crearInput("fechaNacimiento"," fechaNacimiento","date");
    const correoElectronico = crearInput("email","correo electronico");
    const ciudadResidenica = crearInput("ciudadResidencia","ciudadResidencia");
    const ciudadOrigen = crearInput("ciudadOrigen","ciudadOrigen");
    const artista1 = crearInput("artista1","artista1");
    const titulo1 =  crearInput("titulo1","titulo1");
    const artista2 = crearInput("artista2","artista2");
    const titulo2=  crearInput("titulo2","titulo2");
    const artista3 = crearInput("artista3","artista3");
    const titulo3=  crearInput("titulo3","titulo3");
    const boton = crearInputButtom("énviar");
    boton.classList.add("boton");
    div1.append(nombre);
    div1.append(identificacion);
    div1.append(fechaNacimeinto);
    div1.append(correoElectronico);
    div1.append(ciudadResidenica);
    div1.append(ciudadOrigen);
    div2.append(artista1);
    div2.append(titulo1);
    div2.append(artista2);
    div2.append(titulo2);
    div2.append(artista3);
    div2.append(titulo3);
    form.append(div1);
    form.append(div2);
    form.append(boton);
    div.append(form);
    return div;
}
//creamos la clase personas
class Persona {
    constructor(nombre,identificacion,fechaNacimiento,correoELectronico,ciudadResidencia,ciudadOrigen,Preferencia){
        this.nombre = nombre;
        this.identificacion = identificacion;
        this.fechaNacimeinto = fechaNacimiento;
        this.correoELectronico = correoELectronico;
        this.ciudadResidenica = ciudadResidencia;
        this.ciudadOrigen = ciudadOrigen;
        this.Preferencia = Preferencia;
    }
    toString(){
        return " Persona={ nombre= "+ this.nombre + ", identificacion= " + this.identificacion + ", fecha de naciemiento= "
                        + this.fechaNacimeinto +", correo= " + this.correoELectronico + ", ciudad de residencia= " 
                        +this.ciudadResidenica +", ciudad de origen= " + this.ciudadOrigen + " preferencias= " + this.Preferencia.getArtista1() 
                        + this.Preferencia.getArtista2() + this.Preferencia.getArtista3() + "}"
    }
}
//creamos la clase preferencia
class Preferencia {
    constructor(artista1,titulo1,artista2,titulo2,artista3,titulo3){
        this.artista1 = artista1;
        this.titulo1 = titulo1;
        this.artista2 = artista2;
        this.titulo2 = titulo2;
        this.artista3 = artista3;
        this.titulo3 = titulo3;
    }
    getArtista1(){
        return `Preferencia1: artista= ${this.artista1}, titulo= ${this.titulo1} `;
    }
    getArtista2(){
        return `Preferencia2: artista= ${this.artista2}, titulo= ${this.titulo2} `;
    }
    getArtista3(){
        return `Preferencia3: artista= ${this.artista3}, titulo= ${this.titulo3} `;
    }
}
//esta funcion cra un option
const creaOption = (index,Persona) => {
    const option = document.createElement("option");
    option.classList.add("option");
    option.textContent = Persona.nombre;
    option.setAttribute("value", index);
    return option;
}
//esta funcion crea un select 
const creaSelect = () =>{
    const select = document.createElement("select");
    select.setAttribute("name","buscarPersona");
    select.classList.add("select");
    return select;
}
//esta funcion crea el select del form
const creaForm = (select) =>{
    const form = document.createElement("form");
    form.classList.add("form-select");
    const boton = crearInputButtom("buscar");
    boton.classList.add("boton-select");
    form.append(boton);
    return form;
}

export {crearInput,agregarPersona,Persona,Preferencia,creaOption,creaSelect,creaForm}