function perimetro(a,b){
    return 2*(a+b);
}

do{
let a=parseInt(prompt("Ingrese largo"));

while(a===null || Number.isNaN(a)){
    alert("Dato erroneo");
    a=parseInt(prompt("Ingrese largo"));
}   

let b=parseInt(prompt("Ingrese ancho"));

while(b===null || Number.isNaN(b)){
    alert("Dato erroneo");
    b=parseInt(prompt("Ingrese ancho"));
}   

document.write("El perimetro del rectangulo de largo= "+a+" y ancho="+b+" es "+perimetro(a,b)+"<br>");
}while(confirm("Continuar?"));


