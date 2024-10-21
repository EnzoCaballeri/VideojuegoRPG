import { Personaje } from './personaje';

export class Guerrero extends Personaje {
    fuerza: number;

    constructor(nombre: string, puntosDeVida: number, fuerza: number) {
        super(nombre, puntosDeVida);
        this.fuerza = fuerza;
    }

    atacar() {
        console.log(`${this.nombre} el Dark Knight está atacando con una fuerza de ${this.fuerza}.`);
    }

    evolucionar() {
        if (this.nivel >= 5) {
            console.log(`${this.nombre} ha evolucionado a Blade Knight!`);
            this.fuerza += 20;
            this.puntosDeVida += 50;
        } else {
            console.log(`${this.nombre} necesita alcanzar el nivel 5 para evolucionar.`);
        }
    }
}
