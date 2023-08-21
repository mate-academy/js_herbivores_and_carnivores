'use strict';

const INIT_ANIMAL_HEALTH = 100;
const BITE_DAMAGE = 50;

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = INIT_ANIMAL_HEALTH;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor() {
    super();
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(victim) {
    if (victim instanceof Herbivore && !victim.hidden) {
      victim.health -= BITE_DAMAGE;

      if (victim.health <= 0) {
        Animal.alive = Animal.alive.filter(animal => animal.health > 0);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
