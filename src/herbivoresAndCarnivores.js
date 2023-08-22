'use strict';

const FULL_HEALTH = 100;
const BITE_STRENGTH = 50;
const DEAD = 0;

class Animal {
  constructor(name) {
    this.name = name;
    this.health = FULL_HEALTH;

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
  bite(target) {
    if (target.hidden || target instanceof Carnivore) {
      return;
    }

    target.health -= BITE_STRENGTH;

    if (target.health === DEAD) {
      Animal.alive = Animal.alive.filter((animal) => animal.health > DEAD);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
