"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guerrero = void 0;
const personaje_1 = require("./personaje");
class Guerrero extends personaje_1.Personaje {
    constructor(nombre, puntosDeVida, fuerza) {
        super(nombre, puntosDeVida);
        this.fuerza = fuerza;
    }
    atacar() {
        console.log(`${this.nombre} el Guerrero está atacando con una fuerza de ${this.fuerza}.`);
    }
    evolucionar() {
        if (this.nivel >= 5) {
            console.log(`${this.nombre} ha evolucionado a Maestro Guerrerro!`);
            this.fuerza += 20;
            this.puntosDeVida += 50;
        }
        else {
            console.log(`${this.nombre} necesita alcanzar el nivel 5 para evolucionar.`);
        }
    }
}
exports.Guerrero = Guerrero;
