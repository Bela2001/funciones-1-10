/**
 * ejercicio 1
 * cree una función que recibe 2 arreglos como parametros.
 * luego combina estos arreglos en uno solo, alternando sus valores.
 *
 * ejem: dados los arreglos ["h", "a", "c"] y [7, 4, 17, 10, 48],
 * la respuesta deber ser: ["h", 7, "a", 4, "c", 17, 10, 48]
 *
 * note que los arreglos pueden ser de diferente tamaños y el contenido puede ser cualquier tipo de dato
 */

const letras = ["b", "e", "l", "l", "a"];
const numeros = [2, 4, 6, 8, 10];

const mixArreglos = (
  letras: Array<number | string>,
  numeros: Array<number | string>
) => {
  const [l, n] =
    numeros.length > letras.length ? [letras, numeros] : [numeros, letras];

  return Array.from({
    length: l.length * 4,
  })
    .map((_, i) => (i % 2 == 0 ? l[i / 2] : n[Math.ceil(i / 2) - 1]))
    .filter((el) => el);
};

console.log(mixArreglos(letras, numeros));

/**
 * Ejercicio 2
 * Dado un arreglo de numeros, devuelva un arreglo con dos listas en su interios,
 * la primera contendrá los números pares del arreglo y la segunda los impares
 */

/**
 * Ejercicio 3
 * dado un arreglo multidimensional compuesto por varios grupos de 3 letras.
 * ordene su contenido en orden alfabetico.
 *  * las letras de cada grupo están en orden aleatorio.
 *  * cada grupo de letras tambien tiene orden aleatorio en la lista multidimensional.
 *
 * Ejem:
 * dados los grupos de letras ["e", "d", "f"], ["a", "c", "b"], ["m", "o", "n"] en ese mismo orden
 * el resultado de la función debe ser ["a", "b", "c"], ["d", "e", "f"], ["m", "n", "o"] en ese mismo orden
 */

const primerArreglo = ["i", "s", "a"];
const segundoArreglo = ["b", "e", "l"];
const tercerArreglo = ["l", "l", "a"];

var order = primerArreglo.concat(segundoArreglo, tercerArreglo);

function organizados(array: Array<String>) {
  var ordenAr = [];
  array.sort();

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    ordenAr.push(element);
  }

  return ordenAr;
}

console.log(organizados(order));

/**
 * Ejercicio 4
 * dadas dos listas de palabras, retorne una unica lista en la cual se encuentren las palabras
 * que existan en las dos listas iniciales, además ordene esta última lista de manera que las
 * palabras repetidas más veces en ambos arreglos se encuentren al inicio de la lista.
 *
 * ejem:
 * ["rat", "dog", "cat", "parrot", "cat"] y ["cat", "lizard", "rat", "cat"] devolverán ["cat", "rat"]
 */

const lista1 = ["gato", "perro", "gato", "rana"];
const lista2 = ["caballo", "rana", "gato", "abeja"];

const repetidos = lista1.filter(
  (item, index) => index !== lista1.indexOf(item)
);

console.log(repetidos);

/**
 * Ejercicio 5
 * cree una función que reciba dos arreglos y verifique que el primero contenga todos los elementos del segundo
 */

const Arreglouno = [1, 2, 3, 4];
const Arreglodos = [1, 2, 3, 4, 5];

const arrrepetido = Arreglouno.some((element) => {
  return Arreglodos.includes(element);
});

console.log(arrrepetido);

/**
 * Ejercicio 6
 * cree una función que a partir de una arreglo de número y letras, ordene el arreglo con todas las
 * letras en las primeras posiciones (ordenadas alfabeticamente) y luego ponga todos los número
 * ordenados ascendentemente.
 *
 * ejem:
 * el arreglo ["b", 6, "a", "q", 7, 2] retornará ["a", "b", "q", 2, 6, 7]
 */

const armix = ["i", 2, 4, "s", 6, "a"];

function ordenador(armix: Array<any>) {
  var arreglito = armix;
  const arregloorganizado: any[] = [];

  armix = armix.filter((number) => Number.isInteger(number));
  arreglito = arreglito.filter((string) => !Number.isInteger(string));

  armix.sort();
  arreglito.sort();
  arreglito.forEach((element) => {
    arregloorganizado.push(element);
  });

  armix.forEach((element) => {
    arregloorganizado.push(element);
  });

  return arregloorganizado;
}

console.log(ordenador(armix));

/**
 * Ejercicio 7
 * Print integers 1 to N, but print “Fizz” if an integer is divisible by 3, “Buzz” if an integer is divisible
 * by 5, and “FizzBuzz” if an integer is divisible by both 3 and 5
 */

const n: Array<number> = [2, 3, 4, 5, 6, 8, 10, 12];

for (let i = 2; i <= n.length; i = i + 2) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log("...");
  }
}

/**
 * Ejercicio 8
 * dado un arreglo de ideas, donde estas pueden ser buenas o malas, imprima un mensaje con las
 * siguientes condiciones:
 * - si el arreglo no contiene ninguna buena idea entonces el mensaje es "fallo"
 * - si el arreglo contiene 1 o 2 buenas ideas entonces el mensaje es "publicar"
 * - si el arreglo contiene más de 2 buenas ideas entonces el mensaje es "fantastico"
 */

function Arregloideas(array: string[]) {
  if (array.includes("buenas") == true) {
    return "Publicar, fantastico";
  } else {
    return "fallo";
  }
}

/**
 * Ejercicio 9
 * calcular el factorial de un número
 */

type Calcular = (n: number) => number;
const factorial: Calcular = (n: number) => {
  if (n === 1) return 1;
  factorial(1);
  return n * factorial(n - 1);
};

console.log(factorial(10));

/**
 * Ejercicio 10
 * cree una funcion que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para
 * obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el
 * resultado de lanzar dos dados y anotar en un objeto el número de apariciones de dicha suma.
 * ejemplo del resultado:
 * const result = { "7": 3, "2": 1 }
 */
