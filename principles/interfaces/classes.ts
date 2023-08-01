(() => {
  interface Xmen {
    name: string;
    realName: string;
    mutanPower(id: string): string;
  }

  interface Human {
    age: number;
  }

  //To extend a class from an interface, you should use implements
  class Mutant implements Xmen, Human {
    public age: number;
    public name: string;
    public realName: string;
    mutanPower(id: string): string {
      return this.name;
    }
  }
})();
