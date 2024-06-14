'use strict';

const MAX_HEALTH = 100;
const BITE_DAMAGE = 50;
const DEAD_VALUE = 0;

class Animal {
  static alive = [];
  static removeDeadAnimals() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > DEAD_VALUE);
  }

  constructor(name) {
    this.name = name;
    this.health = MAX_HEALTH;
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
  bite(animal) {
    if (
      animal instanceof Herbivore &&
      !(animal instanceof Carnivore) &&
      !animal.hidden
    ) {
      animal.health -= BITE_DAMAGE;
      Animal.removeDeadAnimals();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
