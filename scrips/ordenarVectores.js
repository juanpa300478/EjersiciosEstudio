import { ordenValores } from "./funciones.js";
//obtemos el elemento del dom
const contenedor = document.getElementById("contenedor");
let numeros = [];
let numeros1 = [];
let contador = 0;
let found = true;
let indicador = 1;
//logica obtener valores del input
contenedor.children[1].addEventListener("submit", (e) => {
    e.preventDefault();
    let numero = Number(e.target.numeros.value);
    switch(indicador){
        case 1 :
        if (numero != "" && (found == true || numero > numeros[contador-1])) {
            contador++;
            numeros.push(numero);
            contenedor.children[3].children[0].textContent = numeros;
            found = false;
            if(contador > 4){
                indicador = 2;
                found = true;
                contador = 0;
            }
        } else {
            alert("debes suministrar un nuemero mayor que el anterior, debe sumistrar un valor");
        }
        break;
        case 2 :
            if(numero != "" && (found == true || numero > numeros1[contador-1])){
                contador++;
                numeros1.push(numero);
                contenedor.children[3].children[1].textContent = numeros1;
                found = false;
                if(contador > 4){
                    indicador = 3;
                    alert("vectores llenos debe hacer click en la opcion concatenar vectores para combinarlos");
                    contenedor.children[1].children[1].value = "concatenar vectores";
                }
            }else{
                alert("debes suministrar un numero mayor que el anterior, debe suministrar un valor");
            }
            break;
            case 3 :
                let vector = [];
                for(let i = 0;i < 2;i++){
                    if(i == 0){
                        for(let p = 0;p < numeros.length;p++){
                            vector.push(numeros[p]);
                        }
                    }else{
                        for(let p = 0;p < numeros1.length;p++){
                            vector.push(numeros1[p]);
                        }
                    }
                }
                contenedor.children[5].children[0].textContent = ordenValores(vector);
                break;
    }
})
console.log(ordenValores([20,10,5,2,0,8,3,9]))