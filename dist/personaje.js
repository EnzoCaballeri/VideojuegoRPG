"use strict";
exports.__esModule = true;
exports.Personaje = void 0;
var Personaje = /** @class */ (function () {
    function Personaje(nombre, puntosDeVida) {
        this.nombre = nombre;
        this.nivel = 1;
        this.puntosDeVida = puntosDeVida;
    }
    Personaje.prototype.atacar = function () {
        console.log("".concat(this.nombre, " est\u00E1 atacando."));
    };
    Personaje.prototype.defender = function () {
        console.log("".concat(this.nombre, " est\u00E1 defendiendo."));
    };
    Personaje.prototype.subirNivel = function () {
        this.nivel++;
        console.log("".concat(this.nombre, " ha subido al nivel ").concat(this.nivel, "."));
    };
    return Personaje;
}());
exports.Personaje = Personaje;
