function tabla(numero){
    let tabla=[];

    for (let i=1; i<=10;i++){
        tabla.push(i*numero);
    }

    return tabla;
}

do{
    let numero = parseInt(prompt("Ingrese un numero"));

    if(Number.isNaN(numero)){
        alert("Debes ingresar un numero");
    }else{
        let arraytabla=tabla(numero);

        for(let i=0;i<10;i++){
            document.write(numero+" * "+(i+1)+" = "+arraytabla[i]+"<br>");
        }
    }
    
}while(confirm("Continuar?"));