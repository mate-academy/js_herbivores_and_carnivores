'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hidden = false;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(name) {
    if (name.hidden === false && name instanceof Herbivore) {
      name.health -= 50;
    }

    if (name.health === 0) {
      const index = Animal.alive.indexOf(this);

      Animal.alive = Animal.alive.splice(index, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
