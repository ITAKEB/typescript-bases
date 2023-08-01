import { genericArrowFunction } from './functions';
import { Hero, Villian } from './interfaces';

const deadpool = {
  name: 'Deadpool',
  realName: 'Wade Winston Wilson',
  dangerLevel: 150,
};

console.log(genericArrowFunction<Villian>(deadpool).dangerLevel);
console.log(genericArrowFunction<Hero>(deadpool).realName);
