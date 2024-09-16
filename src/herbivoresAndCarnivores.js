'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = FULL_HEALTH;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

const FULL_HEALTH = 100;
const BITE_DAMAGE = 50;
const ANIMAL_DEAD = 0;

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

    if (animal.health <= ANIMAL_DEAD) {
      Animal.alive = Animal.alive.filter((pray) => pray.health > ANIMAL_DEAD);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
