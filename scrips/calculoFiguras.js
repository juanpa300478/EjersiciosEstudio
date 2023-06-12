import { crearInput, crearInputButtom, calcularTriangulo,newText, calcularRectangulo, calcularCuadrado} from "./funciones.js";
const fragment = document.createDocumentFragment();

const contenedorForm = document.getElementById("contenedorForm");

//formulario para obtener los datos 
const triangulo = () => {
    const form = document.createElement("form");
    const salto = document.createElement("br");
    form.append(crearInput("a", "vertice a"));
    form.append(crearInput("b", "vertice b"));
    form.append(crearInput("c", "vertice c"));
    form.append(crearInput("h", "altura"));
    form.append(salto);
    form.append(crearInputButtom("calcular"));
    return form;
}

const mostrarInputRectangulo = () => {
    const form = document.createElement("form");
    const salto = document.createElement("br");
    form.append(crearInput("a", "vertice a"));
    form.append(crearInput("b", "vertice b"));
    form.append(salto);
    form.append(crearInputButtom("calcular"));
    return form;
}

const mostrarInputCuadrado = () => {
    const form = document.createElement("form");
    const salto = document.createElement("br");
    form.append(crearInput("a", "vertice a"));
    form.append(salto);
    form.append(crearInputButtom("calcular"));
    return form;
}

const mostrarInputRadio = () => {
    const form = document.createElement("form");
    const salto = document.createElement("br");
    form.append(crearInput("r", "radio"));
    form.append(salto);
    form.append(crearInputButtom("calcular"));
    return form;
}




const menu = document.getElementById('menu');
for (let i = 0; i < menu.children.length; i++) {
    menu.children[i].addEventListener("click", () => {
        switch (menu.children[i]) {
            case menu.children[0]:
                if (contenedorForm.children[0]) contenedorForm.children[0].remove();
                contenedorForm.append(triangulo());
                contenedorForm.children[0].addEventListener('submit',(e)=>{
                    e.preventDefault();
                    let verticeA = Number(contenedorForm.children[0].children[0].children[2].value);
                    let verticeB = Number(contenedorForm.children[0].children[0].children[2].value);
                    let verticeC = Number(contenedorForm.children[0].children[0].children[2].value);
                    let verticeD = Number(contenedorForm.children[0].children[0].children[2].value);
                    let result = calcularTriangulo(verticeA,verticeB,verticeC,verticeD);
                    const perimetro = document.getElementById("perimetro");
                    const area = document.getElementById("area");
                    newText(result[0],perimetro);
                    newText(result[1],area);
                })
                break;
            case menu.children[1]:
                if (contenedorForm.children[0]) contenedorForm.children[0].remove();
                contenedorForm.append(mostrarInputRectangulo());
                contenedorForm.children[0].addEventListener('submit',(e)=>{
                    e.preventDefault();
                    let verticeA = Number(contenedorForm.children[0].children[0].children[2].value);
                    let verticeB = Number(contenedorForm.children[0].children[0].children[2].value);
                    let result = calcularRectangulo(verticeA,verticeB);
                    const perimetro = document.getElementById("perimetro");
                    const area = document.getElementById("area");
                    newText(result[0],perimetro);
                    newText(result[1],area);
                })
                break;
            case menu.children[2]:
                if (contenedorForm.children[0]) contenedorForm.children[0].remove();
                contenedorForm.append(mostrarInputCuadrado());
                contenedorForm.children[0].addEventListener('submit',(e)=>{
                    e.preventDefault();
                    let verticeA = Number(contenedorForm.children[0].children[0].children[2].value);
                    let result = calcularCuadrado(verticeA);
                    const perimetro = document.getElementById("perimetro");
                    const area = document.getElementById("area");
                    newText(result[0],perimetro);
                    newText(result[1],area);
                })
                break;
            case menu.children[3]:
                if (contenedorForm.children[0]) contenedorForm.children[0].remove();
                contenedorForm.append(mostrarInputRadio());
                contenedorForm.children[0].addEventListener('submit',(e)=>{
                    e.preventDefault();
                    let verticeA = Number(contenedorForm.children[0].children[0].children[2].value);
                    let result = calcularCuadrado(verticeA);
                    const perimetro = document.getElementById("perimetro");
                    const area = document.getElementById("area");
                    newText(result[0],perimetro);
                    newText(result[1],area);
                })
                break;
        }
    })
}
