"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo a salvo';
        }
    }
    class Villian extends Mutante {
        conquistarMundo() {
            return 'Mundo a conquistado';
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Xmen('Magneto', 'Magnus');
    const prinName = (char) => {
        console.log(char.name);
    };
})();
(() => {
    class Avenger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.avgAge = 35;
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor avenger llamado');
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, publicIsMutant) {
            super(name, realName);
            this.publicIsMutant = publicIsMutant;
            console.log('Constructor Xmen llamado');
        }
        get fullName() {
            return `${this.name} ${this.realName}`;
        }
        set fullName(name) {
            this.name = name;
        }
        getFullNameXmen() {
            return super.getFullName();
        }
    }
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApolipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy apocalipsis... el unico');
            }
            return Apocalipsis.instance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalipsis1 = Apocalipsis.callApolipsis();
    const apocalipsis2 = Apocalipsis.callApolipsis();
    const apocalipsis3 = Apocalipsis.callApolipsis();
    apocalipsis1.changeName('Another name...');
    console.log(apocalipsis1, apocalipsis2, apocalipsis3);
})();
//# sourceMappingURL=main.js.map