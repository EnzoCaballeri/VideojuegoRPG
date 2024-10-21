"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
class Personaje {
    constructor(nombre, puntosDeVida) {
        this.nombre = nombre;
        this.nivel = 1;
        this.puntosDeVida = puntosDeVida;
    }
    atacar() {
        console.log(`${this.nombre} está atacando.`);
    }
    defender() {
        console.log(`${this.nombre} está defendiendo.`);
    }
    subirNivel() {
        this.nivel++;
        console.log(`${this.nombre} ha subido al nivel ${this.nivel}.`);
    }
}
exports.Personaje = Personaje;
