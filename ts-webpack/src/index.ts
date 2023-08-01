import { Pokemon } from './decoretors';

const charmander = new Pokemon('Charmander');

charmander.publicApi = 'Tried to change the value';
console.log(charmander);
