//Funciones Basicas
function sumar(a: number, b: number): number {
  return a + b;
}

const contar = (heroes: string[]): number => {
  return heroes.length;
};
const superHeroes: string[] = ["Flash", "Arrow", "Superman", "Linterna verde"];
contar(superHeroes);

//Parametros por defecto
const llamarBatman = (llamar: boolean = false): void => {
  if (llamar) {
    console.log("Bati signal activated");
  }
};
llamarBatman(true);

//Rest?
const unirHeroes = (...personas: string[]): string => {
  return personas.join(", ");
};

//Tipo function
const noHaceNada = (
  numero?: number,
  texto?: string,
  booleado?: boolean,
  arreglo?: string[]
): void => {};

//Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco: (
  n: number,
  t: string,
  b: boolean,
  arr: string[]
) => void;
noHaceNadaTampoco = noHaceNada;
