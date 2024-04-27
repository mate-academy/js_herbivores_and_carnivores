'use strict';

class Animal {
  static alive = [];

  health = 100;
  hidden = false;

  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (!(animal instanceof Carnivore) && !animal.hidden) {
      animal.health -= 50;

      if (animal.health <= 0) {
        Animal.alive.splice(Animal.alive.indexOf(animal), 1);
      }
    }
  }
}

const zebra = new Herbivore('Zebra');
const tiger = new Carnivore('Tiger');

tiger.bite(zebra);
tiger.bite(zebra);

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
