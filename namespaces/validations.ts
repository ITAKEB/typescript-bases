//The idea of this is to have a mini program, and only expose
//want we want. It could be seen as a class, but here
//you can group several classes, functions, constants inside it.
namespace Validations {
  export const validateText = (text: string): boolean => {
    return text.length > 3 ? true : false;
  };
  const validateDate = (myDate: number): boolean => {
    return isNaN(myDate.valueOf()) ? false : true;
  };
}

console.log(Validations.validateText('Fer'));
