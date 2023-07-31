(() => {
  let avenger: any = 123;
  let exists;
  let power0: any;

  avenger = 123.222312;
  //.toFixed() manejo de decimales
  console.log(<number>avenger.toFixed(0));
  console.log((avenger as number).toFixed(0));
})();
