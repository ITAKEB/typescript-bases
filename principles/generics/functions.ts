export function genericFunction<T>(argument: T): T {
  return argument;
}

export const genericArrowFunction = <T>(argument: T) => {
  //   console.log(argument);
  return argument;
};
