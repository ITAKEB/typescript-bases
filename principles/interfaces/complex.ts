(() => {
  //An interface doesnt create instance
  //An interface doesnt have a constructor
  interface Client {
    name: string;
    age: number;
    address: Address;
    getFullAddress(id: string): string;
  }
  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: 'Fernando',
    age: 25,
    address: {
      id: 125,
      zip: 'KY2 SUD',
      city: 'Ottawa',
    },
    getFullAddress(id: string) {
      return this.address.city;
    },
  };

  const client2: Client = {
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
