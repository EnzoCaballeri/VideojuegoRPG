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
exports.Mago = void 0;
var personaje_1 = require("./personaje");
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago(nombre, puntosDeVida, mana) {
        var _this = _super.call(this, nombre, puntosDeVida) || this;
        _this.mana = mana;
        return _this;
    }
    Mago.prototype.atacar = function () {
        console.log("".concat(this.nombre, " el Dark Wizard est\u00E1 lanzando un hechizo."));
    };
    Mago.prototype.evolucionar = function () {
        if (this.nivel >= 5) {
            console.log("".concat(this.nombre, " ha evolucionado a Soul Master!"));
            this.mana += 50;
            this.puntosDeVida += 30;
        }
        else {
            console.log("".concat(this.nombre, " necesita alcanzar el nivel 5 para evolucionar."));
        }
    };
    return Mago;
}(personaje_1.Personaje));
exports.Mago = Mago;
