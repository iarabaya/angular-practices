"use strict";
// Crear un decorador de clase que entregue a la clase “Heroe” 
// los atributos necesarios para crear un Heroe inicial a la hora de 
// instanciar la clase y cuando ésta se instancie se muestre el Heroe 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function createHero(nombre, poder) {
    return function (constructor) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.name = nombre;
                _this.power = poder;
                return _this;
            }
            return class_1;
        }(constructor));
    };
}
var Hero = /** @class */ (function () {
    function Hero(nombre, poder) {
        this.name = nombre;
        this.power = poder;
    }
    Hero.prototype.showHero = function () {
        console.log("el heroe se llama " + this.name + " y su poder es " + this.power);
    };
    Hero = __decorate([
        createHero("Wonderwoman", "superfuerza")
    ], Hero);
    return Hero;
}());
new Hero("", "").showHero();
