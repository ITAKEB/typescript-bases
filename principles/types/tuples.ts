(() => {
  const tuple: [string, number, boolean] = ['Dr strange', 100, true];

  tuple[0] = '50';
  tuple[2] = false;

  console.log(tuple);
})();
