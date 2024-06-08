'use strict';

const MAX_HEALTH = 100;
const BITE_DAMAGE = 50;
const DEAD_VALUE = 0;

class Animal {
  static alive = [];

  constructor(name, health = MAX_HEALTH) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static removeDeadAnimals() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > DEAD_VALUE);
  }
}

class Herbivore extends Animal {
  constructor(name, health = MAX_HEALTH) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = MAX_HEALTH) {
    super(name, health);
  }

  bite(target) {
    if (target instanceof Herbivore && target.hidden === false) {
      target.health -= BITE_DAMAGE;
    }

    if (target.health <= 0) {
      Animal.alive = Animal.alive.filter((elem) => elem.health > DEAD_VALUE);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
