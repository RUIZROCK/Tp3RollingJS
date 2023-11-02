/*
2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y 
almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo 
generado, luego realizar las siguientes acciones:

*/

const arreglo=["Nueva York, Estados Unidos", "Barcelona, España", "Tokio, Japón", "Londres, Reino Unido", "Roma, Italia", "Pekín, China", "Río de Janeiro, Brasil", "Ámsterdam, Países Bajos", "Sídney, Australia", "El Cairo, Egipto"];

document.write("<h1>lista de ciudades ingresadas (inicio)</h1><ul>");

for(let i=0;i<arreglo.length;i++){
    document.write("<li>"+arreglo[i]+"</li>");
}

document.write("</ul>");


document.write("<br><br><p>longitud del arreglo</p>"+arreglo.length);
document.write("<p>1°,3°, y  ultimo elemento del arreglo: </p>"+arreglo[0]+"<br>"+arreglo[2]+"<br>"+arreglo[arreglo.length]);
document.write("<p>agrego PARIS en la ultima posicion de la ciudad agregada</p>");
arreglo.push("PARIS");
document.write("<p>sustituyo 2° elemento por BARCELONA</p>");
arreglo.splice(1,0,"BARCELONA");


document.write("<br><br><h1>lista de ciudades ingresadas (final)</h1><ul>");

for(let i=0;i<arreglo.length;i++){
    document.write("<li>"+arreglo[i]+"</li>");
}

document.write("</ul>");


