(() => {
  //   let flash = {
  // name: 'Barry Alen',
  // age: 24,
  // powers: ['Supervelocidad', 'viajar en el tiempo'],
  //   };

  //It would mark error because it not the same type the we defined above
  //   flash = {
  // name: 'Barry Alen2',
  // powers: ['Supervelocidad2', 'viajar en el tiempo2'],
  //   };

  let flash: {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  } = {
    name: 'Barry Alen',
    age: 24,
    powers: ['Supervelocidad', 'viajar en el tiempo'],
  };

  //There would be a problem if we want several herores and some chenge is needed
  // let superman: {
  // name: string;
  // age?: number;
  // powers: string[];
  // getName?: () => string;
  // } = {
  // name: 'Clark Ken',
  // age: 62,
  // powers: ['Supervelocidad'],

  flash = {
    name: 'Barry Alen2',
    powers: ['Supervelocidad2', 'viajar en el tiempo2'],
    getName() {
      return this.name;
    },
  };
})();
