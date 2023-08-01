(() => {
  //Its created to create constrains to objects
  //Its similar to create an new object type
  //But an interface can be extends for a class, a type no
  interface Hero {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  }

  let flash: Hero = {
    name: 'Barry Alen',
    age: 24,
    powers: ['Supervelocidad', 'viajar en el tiempo'],
  };

  let superman: Hero = {
    name: 'Clark Ken',
    age: 62,
    powers: ['Supervelocidad'],
    getName() {
      return this.name;
    },
  };
})();
