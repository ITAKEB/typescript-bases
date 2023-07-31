"use strict";
(() => {
    let flash = {
        name: 'Barry Alen',
        age: 24,
        powers: ['Supervelocidad', 'viajar en el tiempo'],
    };
    let superman = {
        name: 'Clark Ken',
        age: 62,
        powers: ['Supervelocidad'],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    class Mutant {
        mutanPower(id) {
            return this.name;
        }
    }
})();
(() => {
    const client = {
        name: 'Fernando',
        age: 25,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa',
        },
        getFullAddress(id) {
            return this.address.city;
        },
    };
    const client2 = {
        name: 'Melissa',
        age: 30,
        address: {
            city: 'Toronto',
            id: 120,
            zip: 'KY2 SUD',
        },
        getFullAddress(id) {
            return this.address.city;
        },
    };
})();
(() => {
    let addNumbers;
    addNumbers = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map