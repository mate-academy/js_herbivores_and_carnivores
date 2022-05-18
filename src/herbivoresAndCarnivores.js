'use strict';

class Animal {
  static alive = [];
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hidden = false;
  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(poorAnimal) {
    if (poorAnimal instanceof Herbivore && poorAnimal.hidden === false) {
      poorAnimal.health -= 50;
    }

    if (poorAnimal.health === 0) {
      Animal.alive = Animal.alive.filter(animal => animal.health !== 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
