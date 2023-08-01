//Crear interfaces

//Cree una interfaz para validar del auto(el valor enviado por parametro)
interface Car {
  encender: boolean;
  velocidadMaxima: number;
  acelerar(): void;
}
const conducirBatimovil = (auto: Car): void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
};

const batimovil: Car = {
  encender: false,
  velocidadMaxima: 0,
  acelerar() {
    console.log('Acelerando....');
  },
};

//Cree una interfaz que permita utilizar el siguiente objeto
//utilizando propiedades opcionales
interface Villian {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}
const guason: Villian = {
  reir: true,
  comer: true,
  llorar: false,
};

const reir = (guason: Villian): void => {
  if (guason.reir) {
    console.log('JAJAJAJAJA');
  }
};

//Cree una interfaz para la siguiente funcion
interface CityFunction {
  (ciudadanos: string[]): number;
}
const ciudadGotica: CityFunction = (ciudadanos: string[]): number => {
  return ciudadanos.length;
};

/*
    Cree una interfaz que obiligue crear una clase 
    con las siguiente propiedades  y metodos

    propiedades:
     - nombre 
     - edad 
     - sexo
     - estadoCivil
     - imprimirBio(): void //En consola una breve descripcion
*/

interface Human {
  edad: number;
  estadoCivil: string;
  nombre: string;
  sexo: string;
  imprimirBio(): void;
}

class Persona implements Human {
  public nombre: string;
  public edad: number;
  public sexo: string;
  public estadoCivil: string;

  imprimirBio(): void {
    console.log(`${this.nombre}`);
  }
}
