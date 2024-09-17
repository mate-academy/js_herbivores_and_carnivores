'use strict';

const DEFAULT_HEALTH = 100;
const BITE_DAMAGE = 50;

class Animal {
  constructor(name, health = DEFAULT_HEALTH) {
    this.name = name;
    this.health = health;
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
      animal.health -= BITE_DAMAGE;
    }

    if (animal.health <= 0) {
      Animal.alive = Animal.alive.filter((subject) => subject.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
