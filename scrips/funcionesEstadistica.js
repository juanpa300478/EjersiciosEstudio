class Persona {
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}
const agregarElementos = (text,text1) =>{
    const crearTr = document.createElement('tr');
    const crearTd = document.createElement('td');
    const crearTd1 = document.createElement('td');
    crearTd.textContent = text;
    crearTd1.textContent = text1;
    crearTr.append(crearTd);
    crearTr.append(crearTd1);
    return crearTr ;
}
//evalua las edades y determina si son de 18 -18 o mas 60
const evaluacionEdadmenos18 = (elemento) => {
    let elemento1 = 0;
    
    for(let i = 0;i < elemento.length;i++){
        if(Number(elemento[i].edad) < 18){
            elemento1++;
        }
    }
    return elemento1;
}
const evaluacionEdadmas18 = (elemento) => {
    let elemento1 = 0;
    
    for(let i = 0;i < elemento.length;i++){
        if(Number(elemento[i].edad) >= 18 && Number(elemento[i].edad < 60)){
            elemento1++;
        }
    }
    return elemento1;
}
const evaluacionEdadmas60 = (elemento) => {
    let elemento1 = 0;
    
    for(let i = 0;i < elemento.length;i++){
        if(Number(elemento[i].edad) >= 60){
            elemento1++;
        }
    }
    return elemento1;
}
//calcular edad mas baja y edad mas alta
const evaluarEdadMasbaja = (elemento) =>{
    let edadBaja;
    let edadAlta;
    let edades = [];
    for(let eda of elemento){
    edades.push(eda.edad);
    }
    edades.sort((a,b)=>a-b);
    edadBaja = edades[0];
    edadAlta = edades[edades.length-1];
    return [edadBaja,edadAlta];
}
//funcion para calcular el promedio de las edades
const promedio = (elemento) =>{
    let valorPromedio = 0;
    elemento.forEach(e => {
        valorPromedio+=e.edad;
    });
    console.log(valorPromedio)
    console.log(elemento.length)
    valorPromedio/=elemento.length;
    console.log(valorPromedio)
    return valorPromedio;
} 

export { Persona, agregarElementos,evaluacionEdadmenos18,evaluacionEdadmas18,evaluacionEdadmas60,evaluarEdadMasbaja,promedio}