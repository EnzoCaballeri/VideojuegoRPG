import { Guerrero } from './guerrero';
import { Mago } from './mago';
import { Arquero } from './arquero';

const guerrero = new Guerrero('Sirius', 100, 30);
const mago = new Mago('Amelia', 80, 50);
const arquero = new Arquero('Aquiles', 90, 75)

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
