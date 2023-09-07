/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arregloDeClaves= Object.keys(objeto);
   var arregloDeArreglos =[];
   arregloDeClaves.forEach(clave => {
      arregloDeArreglos.push([clave,objeto[clave]]);
   });
   return arregloDeArreglos;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var arregloDeCadena = string.split('');
   arregloDeCadena.sort()
   var objeto ={};
   arregloDeCadena.forEach(caracter => {
      if (objeto.hasOwnProperty(caracter)){
         objeto[caracter] +=1;
      } else {
         objeto[caracter] =1;
      };
   });
   return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var arregloDeString = string.split('');
   var arregloMayusculas =[];
   var arregloResto =[];
   var auxiliar='';
   arregloDeString.forEach(caracter =>{
      auxiliar = caracter
      if (caracter===auxiliar.toUpperCase()){
         arregloMayusculas.push(caracter);
      } else {
         arregloResto.push(caracter);
      };
   });
   var resultado = arregloMayusculas.join('')+arregloResto.join('');
   return resultado
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var arregloDePalabras = frase.split(' ');
   var auxiliar=[];
   for (i=0;i<arregloDePalabras.length;i++){
      auxiliar = arregloDePalabras[i].split('');
      auxiliar.reverse();
      arregloDePalabras[i]=auxiliar.join('');
   };
   var resultado = arregloDePalabras.join(' ');
   return resultado;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var arreglo = Array.from(String(numero),Number);
   var ll = Math.floor(arreglo.length / 2);
   for (i=0;i<ll;i++){
      if (arreglo[i]!=arreglo[arreglo.length-i-1]){
         return 'No es capicua';
      };
   };
   return 'Es capicua'
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   // PUEDO HACER UN FOR ENTRE LOS CARACTERES CON LO SIGUIENTE
   // for (i=0;i<string.length;i++){};
   // PERO NO LO VOY A USAR
   var cadenaSinA = string.replace('a','');
   var cadenaSinAB = cadenaSinA.replace('b','');
   var cadenaSinABC = cadenaSinAB.replace('c','');
   return cadenaSinABC;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
