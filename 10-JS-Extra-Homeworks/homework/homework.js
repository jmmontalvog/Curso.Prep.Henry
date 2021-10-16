// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  
    let nuevaMatriz = [];
    /*let longitud = Object.keys(objeto);
      for(let i = 0; i < longitud.length; i++){
          nuevaMatriz.push([longitud[i] , objeto[longitud[i]]]);
      }*/

    for(clave in objeto){
      nuevaMatriz.push([clave, objeto[clave]])
    }

    return nuevaMatriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  let objDeLetras = {};

  for(let i = 0; i < string.length; i++){
    let letra = string[i];
    if(objDeLetras[letra] === undefined){
      objDeLetras[letra] = 1;
    }
    else{
      objDeLetras[letra] += 1;
    }
  }

  return objDeLetras;
  
  /*let almacenarString = [];
  let matrizDeCaracteres = [];
  let matrizContado = [];
  let newArreglo = [];
  let obj1 = {};
  let cont = 1;

  for(let i = 0; i < string.length; i++){ 
      almacenarString.push(string[i]);
  }  
  almacenarString.sort();

  for(let i = 0; i < almacenarString.length; i++){
    if(almacenarString[i+1] === almacenarString[i]){
      cont++;
    }else{
      matrizDeCaracteres.push(almacenarString[i]);
      matrizContado.push(cont);
      cont = 1;
    }          
  }

  for(let i = 0; i < matrizDeCaracteres.length; i++){
    newArreglo.push([matrizDeCaracteres[i] , matrizContado[i]]);
  }

  for(let i = 0; i < newArreglo.length; i++){
    obj1[newArreglo[i][0]] = newArreglo[i][1];
  }

  return obj1;*/
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let mayus = "";
  let min = "";
  
  for(let i = 0; i < s.length; i++){
    if(s[i] === s[i].toUpperCase()){ //Para convertir una letra a Mayuscula
      mayus += s[i];
    }
    else{
      min += s[i];
    }
  }
  return mayus + min;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  let strReverse = str.split(' ').map(function (string) {
    let palabraReversed = '';
    for(let i = string.length - 1; i >= 0; i--){
      palabraReversed = palabraReversed + string[i];
    }
    return palabraReversed;
  }).join(' ');

  /* primero split() y de ahi reverse()
  let strReverse = str.split('').reverse().join('');*/

  return strReverse;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  let str = numero.toString(); // Convierte un número en una cadena (toString)
  let str2 = asAmirror(str); // La función es lo que hicimos en el ejercicio anterior.


  if(str === str2) {
    return 'Es capicua';
  }   
    return 'No es capicua';
  
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

    let cadenaFiltrada = '';
   /* for(let i = 0; i < cadena.length; i++){
      if(cadena[i] !== 'a' && cadena[i] !== 'b' && cadena[i] !== 'c'){
        cadenaFiltrada += cadena[i];
      }
    }*/


  cadenaFiltrada = cadena.replace('a', '').replace('b', '').replace('c', '');

  //  cadenaFiltrada = cadena.replace('a', '');
  //  cadenaFiltrada = cadenaFiltrada.replace('b', '');
  //  cadenaFiltrada = cadenaFiltrada.replace('c', '');

  return cadenaFiltrada;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You"(3), "are"(3), "beautiful" (9), "looking" (7)] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  
  let aux;

  for(let  i = 0; i < arr.length; i++){
    for(let  j = i + 1; j < arr.length; j++){
      if(arr[i].length > arr[j].length){ //Esto es de menor a mayor, si lo queremos convertir de mayor a menor solo debemoms de cambiar el '>' por '<'.
        aux = arr[i]; 
        arr[i] = arr[j]
        arr[j] = aux      
      }        
    }
  }

  //console.log(arr)
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí:

  //let cont = 0;
  let arreglo3 = [];
  for(let i = 0; i < arreglo1.length; i++){
    for(let j = 0; j < arreglo2.length; j++){
      if(arreglo1[i] === arreglo2[j]){
        //arreglo3[cont] = arreglo1[i];
        //cont++;
        arreglo3.push(arreglo1[i]);
      }
    }
  }
  
  //console.log(arreglo3);
  return arreglo3;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

