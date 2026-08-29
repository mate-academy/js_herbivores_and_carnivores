'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.health = 100;
    this.name = name;

    Animal.alive.push(this);
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
  bite(target) {
    if (!(target instanceof Herbivore) || target.hidden === true) {
      return;
    }

    target.health -= 50;

    const deadAnimals = Animal.alive.filter((animal) => animal.health > 0);

    Animal.alive = deadAnimals;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
