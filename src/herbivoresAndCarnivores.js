'use strict';

const FULL_HEALTH = 100;
const NO_HEALTH = 0;
const BITE_DAMAGE = 50;

class Animal {
  constructor(name) {
    this.health = FULL_HEALTH;
    this.name = name;
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
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(prey) {
    if (prey instanceof Herbivore && !prey.hidden) {
      prey.health -= BITE_DAMAGE;
    }

    if (prey.health <= NO_HEALTH) {
      Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
