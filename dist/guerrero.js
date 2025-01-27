"use strict";
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
exports.__esModule = true;
exports.Guerrero = void 0;
var personaje_1 = require("./personaje");
var Guerrero = /** @class */ (function (_super) {
    __extends(Guerrero, _super);
    function Guerrero(nombre, puntosDeVida, fuerza) {
        var _this = _super.call(this, nombre, puntosDeVida) || this;
        _this.fuerza = fuerza;
        return _this;
    }
    Guerrero.prototype.atacar = function () {
        console.log("".concat(this.nombre, " el Dark Knight est\u00E1 atacando con una fuerza de ").concat(this.fuerza, "."));
    };
    Guerrero.prototype.evolucionar = function () {
        if (this.nivel >= 5) {
            console.log("".concat(this.nombre, " ha evolucionado a Blade Knight!"));
            this.fuerza += 20;
            this.puntosDeVida += 50;
        }
        else {
            console.log("".concat(this.nombre, " necesita alcanzar el nivel 5 para evolucionar."));
        }
    };
    return Guerrero;
}(personaje_1.Personaje));
exports.Guerrero = Guerrero;
