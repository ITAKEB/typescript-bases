(() => {
  abstract class Mutante {
    constructor(public name: string, public realName: string) {}
  }

  class Xmen extends Mutante {
    salvarMundo() {
      return 'Mundo a salvo';
    }
  }
  class Villian extends Mutante {
    conquistarMundo() {
      return 'Mundo a conquistado';
    }
  }

  const wolverine: Mutante = new Xmen('Wolverine', 'Logan');
  const magneto: Mutante = new Xmen('Magneto', 'Magnus');

  const prinName = (char: Mutante) => {
    console.log(char.name);
  };

  // prinName(magneto);
})();
