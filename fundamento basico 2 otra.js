< !DOCTYPE html >
    <
    html lang = "en" >

    <
    head >
    <
    meta charset = "UTF-8" >
    <
    meta http - equiv = "X-UA-Compatible"
content = "IE=edge" >
    <
    meta name = "viewport"
content = "width=device-width, initial-scale=1.0" >
    <
    title > fundamento Basico 2 < /title> <
    /head>

<
body >
    <
    script >
    /*Ejercicio 14.*/
    /*Escala el Array - Dado un array arr y un número num, multiplica todos los valores en el array arr por el número num, 
                        y devuelve el array arr modificado. Por ejemplo, escalaArray([1,2,3], 3] debería devolver [3,6,9]*/
    function EscalaelArray(array, num) {
        for (var i = 0; i < array.length; i++) {
            array[i] = array[i] * num
        }
        return array;

    }
console.log(EscalaelArray([1, 2, 3], 3)); //debería devolver [3,6,9]//



/*Ejercicio 13.*/
/*Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, el tercero con el ante penúltimo, etc.
 Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a [“pizza¨, 42, “Ada”, 2, true]. 
cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1]. No es necesario devolver (return) el array esta vez.*/
function cambiaHaciaElCentro(array) {
    var primer = [];
    var tercero = [];
    primer = array[array.length - 1];
    array[array.length - 1] = array[0];
    array[0] = primer;
    tercero = array[array.length / 2];
    array[array.length / 2] = array[(array.length / 2) - 1];
    array[(array.length / 2) - 1] = tercero;


    return array
}
console.log(cambiaHaciaElCentro([1, 2, 3, 4, 5, 6]));

//opcion 2//
function cambiaHaciaElCentro(array) {
    for (var i = 0; i < array.length / 2; i += 2) {
        var temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    return array;
}
console.log(cambiaHaciaElCentro([1, 2, 3, 4, 5, 6])); //cambia el array a [6,2,4,3,5,1]



/*Ejercicio 12*/
/* Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy” 
   cada vez que alguno de los valores sea “comida”. Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez.*/
function Siemprehambriento(array) {
    var contador = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] == "comida") {
            console.log("yummy")
            contador++
        }
    }
    if (contador == 0) {
        console.log("tengo hambre")
    }
}
Siemprehambriento(["jugo", "comida", "comida", "Kalipso", 2, 6, ]) <
    /script>

<
/body>


<
/html>