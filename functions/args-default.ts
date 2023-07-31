(() => {
  //? means optional parameter
  const fullName = (
    firstName: string,
    lastName?: string,
    upper: boolean = false
  ): string => {
    // const name = upper
    //   ? `${firstName} ${lastName || "no last name"}`.toUpperCase()
    //   : `${firstName} ${lastName || "no last name"}`;
    // return name;
    if (upper) {
      return `${firstName} ${lastName || "no last name"}`.toUpperCase();
    } else {
      return `${firstName} ${lastName || "no last name"}`;
    }
  };

  const name = fullName("Tony", "Stark", true);
  console.log(name);
})();
