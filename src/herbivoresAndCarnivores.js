'use strict';

const BASE_HEALTH = 100;
const BASE_DAMAGE = 50;

class Animal {
  constructor(name) {
    this.name = name;
    this.health = BASE_HEALTH;
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
  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= BASE_DAMAGE;
    }

    Animal.alive = Animal.alive.filter(victim => victim.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
