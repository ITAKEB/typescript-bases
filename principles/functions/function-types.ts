(() => {
  const addNumbers = (a: number, b: number) => a + b;
  const greet = (name: string) => `Hola ${name}`;
  const saveTheWorld = () => "El mundo esta salvado!";

  //   let myFunction: Function;
  //   let myFunction: (y: number, z: number) => number;
  //   let myFunction: (y: string) => string;
  let myFunction: () => string;
  //   let myFunction: () => void;

  //*   myFunction = 10;
  //*   console.log(myFunction);

  myFunction = addNumbers;
  console.log(myFunction(1, 2));

  myFunction = greet;
  console.log(myFunction("Tomasin"));

  myFunction = saveTheWorld;
  console.log(myFunction());
})();
