import { Personaje } from './personaje';

export class Arquero extends Personaje {
    precision: number;

    constructor(nombre: string, puntosDeVida: number, precision: number) {
        super(nombre, puntosDeVida);
        this.precision = precision;
    }

    atacar() {
        console.log(`${this.nombre} el Arquero está disparando una flecha con una precisión de ${this.precision}.`);
    }

    evolucionar() {
        if (this.nivel >= 5) {
            console.log(`${this.nombre} ha evolucionado a Maestro Arquero!`);
            this.precision += 10;
            this.puntosDeVida += 20;
        } else {
            console.log(`${this.nombre} necesita alcanzar el nivel 5 para evolucionar.`);
        }
    }
}
