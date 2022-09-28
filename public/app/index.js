const letras = ["b", "e", "l", "l", "a"];
const numeros = [2, 4, 6, 8, 10];
const mixArreglos = (letras, numeros) => {
    const [l, n] = numeros.length > letras.length ? [letras, numeros] : [numeros, letras];
    return Array.from({
        length: l.length * 4,
    })
        .map((_, i) => (i % 2 == 0 ? l[i / 2] : n[Math.ceil(i / 2) - 1]))
        .filter((el) => el);
};
console.log(mixArreglos(letras, numeros));
const primerArreglo = ["i", "s", "a"];
const segundoArreglo = ["b", "e", "l"];
const tercerArreglo = ["l", "l", "a"];
var order = primerArreglo.concat(segundoArreglo, tercerArreglo);
function organizados(array) {
    var ordenAr = [];
    array.sort();
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        ordenAr.push(element);
    }
    return ordenAr;
}
console.log(organizados(order));
const lista1 = ["gato", "perro", "gato", "rana"];
const lista2 = ["caballo", "rana", "gato", "abeja"];
const repetidos = lista1.filter((item, index) => index !== lista1.indexOf(item));
console.log(repetidos);
const Arreglouno = [1, 2, 3, 4];
const Arreglodos = [1, 2, 3, 4, 5];
const arrrepetido = Arreglouno.some((element) => {
    return Arreglodos.includes(element);
});
console.log(arrrepetido);
const armix = ["i", 2, 4, "s", 6, "a"];
function ordenador(armix) {
    var arreglito = armix;
    const arregloorganizado = [];
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
const n = [2, 3, 4, 5, 6, 8, 10, 12];
for (let i = 2; i <= n.length; i = i + 2) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log("...");
    }
}
function Arregloideas(array) {
    if (array.includes("buenas") == true) {
        return "Publicar, fantastico";
    }
    else {
        return "fallo";
    }
}
const factorial = (n) => {
    if (n === 1)
        return 1;
    factorial(1);
    return n * factorial(n - 1);
};
console.log(factorial(10));
