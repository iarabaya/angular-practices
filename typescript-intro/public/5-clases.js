"use strict";
var Heroe = /** @class */ (function () {
    function Heroe(nombre, apellido, superpoder) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.superpoder = superpoder;
    }
    Heroe.prototype.mostrarNombreYPoder = function () {
        return "El nombre es " + this.nombre + " y el poder es " + this.superpoder;
    };
    return Heroe;
}());
var deadpool = new Heroe('Wade', 'Wilson', 'Regeneracion');
console.log(deadpool.mostrarNombreYPoder());
