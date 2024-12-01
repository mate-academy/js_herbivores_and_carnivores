'use strict';

const MAX_HEALTH = 100;
const BITE_DAMAGE = 50;
const DEAD_VALUE = 0;

class Animal {
  static alive = [];
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
    if (!this.hidden) {
      this.hidden = true;
    }
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= BITE_DAMAGE;
      Animal.alive = Animal.alive.filter((item) => item.health > DEAD_VALUE);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
