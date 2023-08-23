'use strict';

const START_HEALTH = 100;
const BITE_DAMAGE = 50;
const DEATH_VALUE = 0;

class Animal {
  static alive = [];
  constructor(name) {
    this.name = name;
    this.health = START_HEALTH;

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
  bite(prey) {
    if (prey instanceof Herbivore && !prey.hidden) {
      prey.health -= BITE_DAMAGE;
    }

    if (prey.health <= DEATH_VALUE) {
      Animal.alive = Animal.alive.filter(animal => animal.health > DEATH_VALUE);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
