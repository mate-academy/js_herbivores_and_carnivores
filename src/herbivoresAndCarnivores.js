'use strict';

const FULL_HEALTH = 100;
const DEAD = 0;
const BITE_DAMAGE = 50;

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
  bite(prey) {
    if (prey.hidden || prey instanceof Carnivore) {
      return;
    }

    prey.health -= BITE_DAMAGE;

    if (prey.health === DEAD) {
      Animal.alive = Animal.alive.filter((animal) => animal.health > DEAD);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
