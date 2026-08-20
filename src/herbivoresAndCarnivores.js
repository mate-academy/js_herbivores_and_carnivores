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
  bite(animal) {
    if (animal instanceof Carnivore || animal.hidden === true) {
      return;
    }

    animal.health -= 50;
    Animal.alive = Animal.alive.filter((elem) => elem.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
