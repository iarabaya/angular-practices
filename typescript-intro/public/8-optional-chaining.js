"use strict";
var perro = {
    nombre: 'Firulais',
    edad: 8
};
var gato = {
    nombre: 'Michi',
    edad: 2
};
var pez = {
    nombre: 'Magikarp'
};
var edadMascota = function (mascota) {
    var edad = (mascota === null || mascota === void 0 ? void 0 : mascota.edad) || 'no especificado';
    console.log("nombre " + mascota.nombre + " " + edad);
};
edadMascota(perro);
edadMascota(pez);
edadMascota(gato);
