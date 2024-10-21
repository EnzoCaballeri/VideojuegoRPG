"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const guerrero_1 = require("./guerrero");
const mago_1 = require("./mago");
const arquero_1 = require("./arquero");
const guerrero = new guerrero_1.Guerrero('Sirius', 100, 30);
const mago = new mago_1.Mago('Amelia', 80, 50);
const arquero = new arquero_1.Arquero('Aquiles', 90, 75)
guerrero.atacar();
mago.atacar();
arquero.atacar();
guerrero.subirNivel();
guerrero.subirNivel();
guerrero.subirNivel();
guerrero.subirNivel();
guerrero.subirNivel();
guerrero.evolucionar();
mago.evolucionar();
arquero.evolucionar();
