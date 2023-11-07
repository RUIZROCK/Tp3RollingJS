function mensaje(numero){
    return numero%2===0?"Es par":"Es impar";
}

do{
    let numero = parseInt(prompt("Ingrese un numero"));

    if(Number.isNaN(numero)){
        alert("Debes ingresar un numero");
    }else{
        if(numero === 0){
            document.write("El numero ingresado es cero <br>");
        }else{
            document.write("El numero "+numero+" "+mensaje(numero)+"<br>");
        }
    }
}while(confirm("Continuar?"));

