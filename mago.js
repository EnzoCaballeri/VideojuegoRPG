"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mago = void 0;
const personaje_1 = require("./personaje");
class Mago extends personaje_1.Personaje {
    constructor(nombre, puntosDeVida, mana) {
        super(nombre, puntosDeVida);
        this.mana = mana;
    }
    atacar() {
        console.log(`${this.nombre} el Mago está lanzando un hechizo.`);
    }
    evolucionar() {
        if (this.nivel >= 5) {
            console.log(`${this.nombre} ha evolucionado a Mago Maestro!`);
            this.mana += 50;
            this.puntosDeVida += 30;
        }
        else {
            console.log(`${this.nombre} necesita alcanzar el nivel 5 para evolucionar.`);
        }
    }
}
exports.Mago = Mago;
