(() => {
  //Single tone principle
  class Apocalipsis {
    //Only can call inside the same class
    static instance: Apocalipsis;
    private constructor(public name: string) {}

    static callApolipsis(): Apocalipsis {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis('Soy apocalipsis... el unico');
      }

      return Apocalipsis.instance;
    }

    changeName(newName: string): void {
      this.name = newName;
    }
  }

  const apocalipsis1: Apocalipsis = Apocalipsis.callApolipsis();
  const apocalipsis2: Apocalipsis = Apocalipsis.callApolipsis();
  const apocalipsis3: Apocalipsis = Apocalipsis.callApolipsis();

  apocalipsis1.changeName('Another name...');
  //   const apocalipsis1 = new Apocalipsis('Soy apocalipsis1... el unico');
  //   const apocalipsis2 = new Apocalipsis('Soy apocalipsis2... el unico');
  //   const apocalipsis3 = new Apocalipsis('Soy apocalipsis3... el unico');

  //   console.log(apocalipsis1);
  console.log(apocalipsis1, apocalipsis2, apocalipsis3);
})();
