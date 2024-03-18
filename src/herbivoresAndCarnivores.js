'use strict';

class Animal {
  static alive = [];

  constructor(name, health) {
    this.health = health || 100;
    this.name = name;

    Animal.alive.push(this);
  }

  filterAnimal() {
    if (Animal.alive.length > 0) {
      Animal.alive = Animal.alive.filter((item) => item.health > 0);
    }
  }
}

class Herbivore extends Animal {
  hidden = false;
  constructor(name, health) {
    super(name);
    this.name = name;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name);
    this.name = name;
  }

  bite(animal) {
    if (Animal.alive.includes(animal) && animal instanceof Herbivore) {
      if (!animal.hidden) {
        animal.health -= 50;
      }

      this.filterAnimal();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

// debugger;

// const deer = new Herbivore('Bembi');

// const panther = new Carnivore('Bagira');
// const lion = new Carnivore('King');
// const rabbit = new Herbivore('Max');

// debugger;
// // Animal.alive === [
// //   {name: 'Bembi', health: 100, hidden: false},
// //   {name: 'Bagira', health: 100},
// //   {name: 'King', health: 100},
// //   {name: 'Max', health: 100, hidden: false},
// // ];

// lion.bite(deer);
// panther.bite(lion);

// // Animal.alive === [
// //   {name: 'Bembi', health: 50},
// //   {name: 'Bagira', health: 100},
// //   {name: 'King', health: 100},
// //   {name: 'Max', health: 100},
// // ];

// panther.bite(deer);
// rabbit.hide();
// panther.bite(rabbit);

// // Animal.alive === [
// //   {name: 'Bagira', health: 100},
// //   {name: 'King', health: 100},
// //   {name: 'Max', health: 100, hidden: true},
// // ];

// console.log(deer);
// console.log(deer instanceof Herbivore);
// console.log(Animal.alive);
