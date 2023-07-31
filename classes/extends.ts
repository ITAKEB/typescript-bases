(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      console.log('Constructor avenger llamado');
    }

    protected getFullName(): string {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(
      name: string,
      realName: string,
      public publicIsMutant: boolean
    ) {
      super(name, realName);
      console.log('Constructor Xmen llamado');
    }

    //Its like access to other property more
    get fullName(): string {
      return `${this.name} ${this.realName}`;
    }

    //Its like assign other property more
    set fullName(name: string) {
      this.name = name;
    }

    private getFullNameXmen(): string {
      return super.getFullName();
    }
  }

  // const wolverine = new Xmen('Wolverine', 'Logan', true);
  // console.log(wolverine.fullName);
  // wolverine.fullName = 'Fernando';
  // console.log(wolverine.fullName);
})();
