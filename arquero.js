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
exports.Arquero = void 0;
var personaje_1 = require("./personaje");
var Arquero = /** @class */ (function (_super) {
    __extends(Arquero, _super);
    function Arquero(nombre, puntosDeVida, precision) {
        var _this = _super.call(this, nombre, puntosDeVida) || this;
        _this.precision = precision;
        return _this;
    }
    Arquero.prototype.atacar = function () {
        console.log("".concat(this.nombre, " el Arquero est\u00E1 disparando una flecha con una precisi\u00F3n de ").concat(this.precision, "."));
    };
    Arquero.prototype.evolucionar = function () {
        if (this.nivel >= 5) {
            console.log("".concat(this.nombre, " ha evolucionado a Maestro Arquero!"));
            this.precision += 10;
            this.puntosDeVida += 20;
        }
        else {
            console.log("".concat(this.nombre, " necesita alcanzar el nivel 5 para evolucionar."));
        }
    };
    return Arquero;
}(personaje_1.Personaje));
exports.Arquero = Arquero;
