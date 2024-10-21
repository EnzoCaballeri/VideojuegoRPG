import { Personaje } from './personaje';

export class Mago extends Personaje {
    mana: number;

    constructor(nombre: string, puntosDeVida: number, mana: number) {
        super(nombre, puntosDeVida);
        this.mana = mana;
    }

    atacar() {
        console.log(`${this.nombre} el Dark Wizard está lanzando un hechizo.`);
    }

    evolucionar() {
        if (this.nivel >= 5) {
            console.log(`${this.nombre} ha evolucionado a Soul Master!`);
            this.mana += 50;
            this.puntosDeVida += 30;
        } else {
            console.log(`${this.nombre} necesita alcanzar el nivel 5 para evolucionar.`);
        }
    }
}
