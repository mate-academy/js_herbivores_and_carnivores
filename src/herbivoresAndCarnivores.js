'use strict';

const FULL_HEALTH = 100;
const BITE_HEALTH = 50;

class Animal {
  constructor(name, health = FULL_HEALTH) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }

  die() {
    Animal.alive = Animal.alive.filter(animal => animal.health > 0);
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
    if (!animal.hidden && animal instanceof Herbivore) {
      animal.health -= BITE_HEALTH;
    }

    if (animal.health <= 0) {
      animal.die();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
