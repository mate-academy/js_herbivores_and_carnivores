'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(victim) {
    if (victim instanceof Herbivore && victim.hidden === false) {
      victim.health -= 50;

      if (victim.health === 0) {
        Animal.alive = Animal.alive.filter((animal) => animal !== victim);
      }
    }
  }
}

const deer = new Herbivore('Bembi');
const panther = new Carnivore('Bagira');
const lion = new Carnivore('King');
// const rabbit = new Herbivore('Max');

lion.bite(deer);
panther.bite(lion);

// console.log(Animal);

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
