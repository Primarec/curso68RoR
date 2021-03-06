EJERCICIO 1

function a() {
    return 35; /* la funcion vá entregar su imagen , pues a() admite cualquier dominio, por tanto solo dara el status aguas abajo de su ejecución */
}
console.log(a())
Resp: imprime 35

EJERCICIO 2

function a() { /* retorna 8 , pues realizará lo mismo que el ejercicio anterior , en la suma de estos retornos , pues la impresion llama a tal suma */
    return 4;
}
console.log(a() + a());
Resp: imprime 8

EJERCICIO 3

function a(b) { /* lo mismo , sumando las dos imagenes y su impresion */
    return b;
}
console.log(a(2) + a(4));
Resp: imprime 6

EJERCICIO 4 /* lee 3 ante la llamada , imprime dicha imagen , despues multiplica dicho valor por 3 */
function a(b) {
    console.log(b);
    return b * 3;
}
console.log(a(3));
Resp: Imprime 3 y 9

EJERCICIO 5

function a(b) { /*  lee 10 , genera la imagen de la multiplicacion por 4*/ ,
    return b * 4;
    console.log(b);
}
console.log(a(10));
Resp: imprime 40

EJERCICIO 6

function a(b) { /* es llamado con x=15 , 15<10 --> false , sino retorna 4, imprimiendo el valor de retorno log(b)=4  */
    if (b < 10) {
        return 2;
    } else {
        return 4;
    }
    console.log(b);
}
console.log(a(15));
Resp: entrega la impresion de 4, pues imprime y =
    return 4

EJERCICIO 7 /* el mejor ejercicio , ilustrativo , cuando se llama la funcion para ejecutar una dominio , para despues solo imprimir dicho dominio */

function a(b, c) { /* es llamada con x=3, x=4. Retorna la multiplicacion de ambas , b*c= 10*3 */
    return b * c;
}
console.log(10, 3); /* imprime 10 y 3 */
console.log(a(3, 10));
/*  imprime la imagen de la función , cual es : evaluar return b*c=30

EJERCICIO 8

function a(b){
    for(var i=0; i<10; i++){  
        console.log(i);
    }
    return i;		
}
console.log(3);  
console.log(4);
Resp : imprime 3 y 4 

EJERCICIO 9 

function a(){
    for(var i=0; i<10; i++){
        i = i +2;          /*  i = 2 ,  i=2 ,<-- 1+2 . 2+3 =5 ,....  hasta que i<10 */
console.log(i);
/* imprime el contador de la linea anterior : 2, 5 , 8 
    }
}
a();
Resp : imprime 2, 5, 8, 11 

EJERCICIO 10

function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));
Resp : como b <c , queda una respuesta indefinida al ser llamada , limitado ese ciclo por los valores de ( b, c)

EJERCICIO 11 
function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}
Resp : no es llamada la funcion 

EJERCICIO 12 
function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}
var z = 10;

Resp : no es llamada la funcion 

EJERCICIO 13 

function a(){
    var z = 15;
    console.log(z);
}
console.log(z);
var z = 10;
 
Resp: imprime 10 , pues es impreso por el console.log(z)

EJERCICIO 14 
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);
var z = 10;
Resp : entrega los valores de 15 y 10 , pues es llamada la funcion , imprime el valor de z=15 , despues z=10 , imprime de nuevo

EJERCICIO 15 
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);

Resp :imprime 15 , 15