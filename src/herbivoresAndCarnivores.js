'use strict';

const COMPLEATLY_HEALTHY = 100;
const BITE_OF_ANIMAL = 50;
const NOT_HEALTHY = 0;

class Animal {
  constructor(name) {
    this.health = COMPLEATLY_HEALTHY;
    this.name = name;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(health, name) {
    super(health, name);

    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(health, name);
  }

  bite(prey) {
    if (prey instanceof Herbivore && !prey.hidden) {
      prey.health -= BITE_OF_ANIMAL;
    }

    if (prey.health === NOT_HEALTHY) {
      Animal.alive = Animal.alive.filter(animal => animal !== prey);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
