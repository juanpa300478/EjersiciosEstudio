//funcion para crear elementos he insertarlos en un document fragment

const crearInput = (nombreInput,textLabel) =>{
    const div = document.createElement("div");
    const label = document.createElement("label");
    const salto = document.createElement("br");
    label.setAttribute("for",nombreInput);
    label.textContent = textLabel;
    const input = document.createElement("input");
    input.setAttribute("name",nombreInput);
    input.setAttribute("type","Number");
    div.append(label);
    div.append(salto);
    div.append(input);
    return div;
}
const crearInputButtom = (text) =>{
    const input = document.createElement("input");
    input.setAttribute("type","submit");
    input.setAttribute("value",text);
    return input;
}
//funcion para cambia texte de un elemento
const newText =(text,element)=>{
    element.textContent = text
}

//funciones aritmeticas
const calcularTriangulo = (a,b,c,h) => {
    let area = a+b+c;
    let perimetro = b*h/2;
    return [area,perimetro];
}
const calcularRectangulo = (a,b)=>{
    let perimetro = 2*(b+a);
    let area = b*a;
    return [area,perimetro] ;
}
const calcularCuadrado = (a) => {
    let perimetro = 4*a;
    let area = a*a;
    return [perimetro,area]
}
const calcularCirculo = (r) =>{
    let perimetro = 2*Math.PI*(r*r);
    let area = Math.PI*(r*r);
    return [perimetro,area]
}
//funcion para ordenar numeros o letras 
const  ordenValores = (vector) =>{
    let vector1 = vector;
    let aux;
    for(let i = 0; i < vector1.length;i++){
        for(let p = 0; p < vector1.length-1;p++){
            if(vector1[p] > vector1[p + 1]){
                aux = vector1[p + 1];
                vector1[p + 1] = vector1[p];
                vector1[p] = aux;
            }
        }
    }
    return vector1 ;
}

export { ordenValores,crearInput,crearInputButtom,calcularTriangulo,calcularRectangulo,calcularCuadrado,calcularCirculo,newText };