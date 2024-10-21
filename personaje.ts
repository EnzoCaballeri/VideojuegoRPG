export class Personaje {
    nombre: string;
    nivel: number;
    puntosDeVida: number;

    constructor(nombre: string, puntosDeVida: number) {
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
