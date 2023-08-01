(() => {
  //Tipos
  const batman: string = 'Bruce';
  const superman: string = 'Clark';

  const existe: boolean = false;

  //Tuples
  const heroesTuple: [string, string] = [batman, superman];
  const villano: [string, number, boolean] = ['Lex lutor', 5, true];

  //Arrays
  const allies: string[] = ['Mujer maravilla', 'Acuaman', 'San', 'Flash'];

  //Enumerations
  enum heroesForce {
    fuerzaFlash = 5,
    fuerzaSuperman = 100,
    fuerzaBatman = 1,
    fuerzaAquaman = 0,
  }

  const fuerzaFlash: heroesForce = 5;
  const fuerzaSuperman: heroesForce = 100;
  const fuerzaBatman: heroesForce = 1;
  const fuerzaAquaman: heroesForce = 0;

  //Function 'returns'
  function activeBatSign(): string {
    return 'activated';
  }

  function askHelp(): void {
    console.log('Heeeeelp!!');
  }

  //Type assertions
  const power: any = '100';
  const powerDuration: number = (power as string).length;

  //Test
  let test: null = null;
  console.log(test);
})();
