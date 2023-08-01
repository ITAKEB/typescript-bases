function printToConsole(constructor: Function) {
  console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false): Function => {
  return print ? () => printToConsole : () => {};
};

const bloquearPrototipo = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

//Its a function that will be execute at transpilate/compilate time
//It will execute secuantially
@bloquearPrototipo
@printToConsoleConditional(true)
export class Pokemon {
  public publicApi: string = 'https://pokeapi.co';
  constructor(public name: string) {}
}

// const charmander = new Pokemon('Charmander');
// (Pokemon.prototype as any).customName = 'Pikachu';
