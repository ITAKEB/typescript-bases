(() => {
  // it must not finished successfully
  // It usually finished with an error
  //   const abc = (message: string): (never|number) => {
  const abc = (message: string): never => {
    throw new Error(message);
  };

  abc('auxilio');
  console.log('hola mundo');
})();
