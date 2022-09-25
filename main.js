function convertir(){
    let valor = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    let dolar = 300;
    let euro = 350;
    let real = 28;
    if (document.getElementById("uno").checked){
        // Propiedad .checked que me permite verificar las ordenes dentro condicional 
        resultado = valor / dolar;
        alert("El cambio de pesos a dolares es: US$" + resultado.toFixed(2));
        //Propiedad .tofixed muestra los decimales que yo deseo
    }
    else if (document.getElementById("dos").checked){
        resultado = valor / euro;
        alert("El  cambio de pesos a Euros es: EUR" + resultado.toFixed(2));
    }
    else if (document.getElementById("tres").checked){ 
        resultado = valor / real;
        alert("El cambio de pesos a reales es: real" + resultado.toFixed(2));
    }
    else{
        alert("Tienes que completar todos los datos")
    }
    
}