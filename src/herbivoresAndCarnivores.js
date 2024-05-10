'use strict';

class Animal {
  static alive = [];
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  bitten() {
    if (this.health - 50 > 0) {
      this.health -= 50;
    } else {
      Animal.alive.splice(Animal.alive.indexOf(this), 1);
    }
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (!(animal instanceof Carnivore) && !animal.hidden) {
      animal.bitten();
    }
  }
}

const deer = new Herbivore('Bembi');
const panther = new Carnivore('Bagira');
const lion = new Carnivore('King');
const rabbit = new Herbivore('Max');

// Animal.alive ===
//   [
//     { name: 'Bembi', health: 100, hidden: false },
//     { name: 'Bagira', health: 100 },
//     { name: 'King', health: 100 },
//     { name: 'Max', health: 100, hidden: false },
//   ];

lion.bite(deer);
panther.bite(lion);

// Animal.alive ===
//   [
//     { name: 'Bembi', health: 50 },
//     { name: 'Bagira', health: 100 },
//     { name: 'King', health: 100 },
//     { name: 'Max', health: 100 },
//   ];

panther.bite(deer);
rabbit.hide();
panther.bite(rabbit);

// Animal.alive ===
//   [
//     { name: 'Bagira', health: 100 },
//     { name: 'King', health: 100 },
//     { name: 'Max', health: 100, hidden: true },
//   ];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
