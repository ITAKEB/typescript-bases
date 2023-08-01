//Objectos
type superCar = {
  carroceria: string;
  modelo: string;
  antibalas: boolean;
  pasajeros: number;
  disparar?: () => void;
};

const batimovil: superCar = {
  carroceria: 'Negro',
  modelo: '6x6',
  antibalas: true,
  pasajeros: 4,
};

const bumblebee: superCar = {
  carroceria: 'Amarillo con negro',
  modelo: '4x2',
  antibalas: true,
  pasajeros: 4,
  disparar() {
    //Disparar es opcional
    console.log('Disparando');
  },
};

type Villian = {
  nombre: string;
  edad: number | undefined;
  mutante: boolean;
};
//Debe ser un arreglo de objetos personalizados
const villanos: Villian[] = [
  {
    nombre: 'Lex luthor',
    edad: 54,
    mutante: false,
  },
  {
    nombre: 'Erik Magnus Lehnsherr',
    edad: 54,
    mutante: true,
  },
  {
    nombre: 'James Logan',
    edad: undefined,
    mutante: true,
  },
];

//Multiples tipos
//Cree dos tipos, uno para charles y otro para apocalipsis
type Charles = {
  poder: string;
  estatura: number;
};
const charles: Charles = {
  poder: 'psiquico',
  estatura: 1.78,
};

type Apocalipsis = {
  lider: boolean;
  miembros: string[];
};
const apocalipsis: Apocalipsis = {
  lider: true,
  miembros: ['Magneto', 'Tormenta', 'Psylocke', 'Angel'],
};

//Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: Charles | Apocalipsis;

mystique = charles;
mystique = apocalipsis;
