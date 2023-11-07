function mensaje(cadena){
    return cadena===cadena.toLowerCase()?"letras minuscula":cadena===cadena.toUpperCase()?"letras mayusculas":"Combinado de letras mayusculas y minusculas";
}

do{
    let cadena = prompt("Escriba un texto");
    if(cadena===null || cadena===""){
        alert("Texto vacio NO!");
    }else{
        document.write("El texto "+cadena+" esta compuesto por "+mensaje(cadena)+"<br>");
    }
}while(confirm("Continuar?"));
