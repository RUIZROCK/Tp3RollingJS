/*
3- Escribir un script que simule el lanzamiento de dos dados. 
Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 
para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados 
y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

*/

const resultados=[2,3,4,5,6,7,8,9,10,11,12];
const apariciones=[0,0,0,0,0,0,0,0,0,0,0];
let cont=1;




while(cont<=50){
    let dado1=Math.ceil(Math.random() * 6)
    let dado2=Math.ceil(Math.random() * 6)
    let suma=dado1+dado2;

    document.write("<h3>lanzamiento "+cont+"</h3>");
    document.write("dado 1: "+dado1+"<br>")
    document.write("dado 2: "+dado2+"<br>")
    document.write("resultado: "+suma+"<br><br>")

    for(let i=0;i<resultados.length;i++){
        if(suma===resultados[i]){
            apariciones[i]++;
        }
    }
    cont++;
}



document.write("<h3>Resultado final</h3><table><thead><tr><th>suma</th><th>apariciones</th></tr></thead><tbody>");
for(let i=0;i<resultados.length;i++){
    document.write("<tr><td>"+resultados[i]+"</td><td>"+apariciones[i]+"</td></tr>");
}

document.write("</tbody></table>");