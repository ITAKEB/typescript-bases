function printToConsole(constructor: Function) {
  console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false): Function => {
  if (print) {
    return printToConsole;
  } else {
    return () => {};
  }
  //   return print ? printToConsole : () => {};
};

//Normal decorator (its a function that return something different that a function)
const bloquearPrototipo = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

//Factory decorator (function that returns another function)
function CheckValidPokemonId() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    //It will execute the method with the same params
    const originalMethod = descriptor.value;
    descriptor.value = (id: number) => {
      if (id < 1 || id > 800) {
        return console.error('El id esta fuera de los parametros 1:800');
      } else {
        return originalMethod(id);
      }
    };
    //These are the params of the method decorator
    console.log({ target, propertyKey, descriptor });
    // console.log(target);
    // console.log(propertyKey);
    // console.log(descriptor);
  };
}

//Its a function that will be execute at transpilate/compilate time
//It will execute secuantially
// @bloquearPrototipo
// @printToConsoleConditional(true)
export class Pokemon {
  public publicApi: string = 'https://pokeapi.co';
  constructor(public name: string) {}

  @CheckValidPokemonId()
  public savePokemonToDb(id: number) {
    console.log(`Save on db successfully ${id}`);
  }
}
