"use strict";
var edad = 25;
var nombre = 'fulanito';
var esMayor = true;
var hobbies;
hobbies = ['nadar', 'tocar la guitarra', 'cocinar'];
var positivos = [1, 2, 3, 40];
var persona2 = {
    nombre: 'clark',
    apellido: 'kent',
    fechaNacimiento: '1-1-1999'
};
function superficieTriangulo(a, b) {
    return a * b;
}
var superficieTriangulo2 = function (a, b) { return a * b; };
var setSuperficie = function (figura, a) {
    figura.superficie = a;
    return figura;
};
var ejFigura = {
    base: 1,
    altura: 2,
};
console.log(setSuperficie(ejFigura, 3));
