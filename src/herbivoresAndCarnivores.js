'use strict';

class Animal {
  constructor(name, health) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

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
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;
    }

    Animal.alive = Animal.alive.filter(animals => animals.health !== 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
