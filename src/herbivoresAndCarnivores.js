'use strict';

const ANIMAL_DAMAGE = 50;
const ANIMAL_BASE_HP = 100;
const MINIMUM_HP = 0;

class Animal {
  constructor(name) {
    this.name = name;
    this.health = ANIMAL_BASE_HP;
    this.hidden = false;
    Animal.alive.push(this);
  }

  static alive = [];
}

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal.constructor === Carnivore || animal.hidden) {
      return;
    }

    animal.health -= ANIMAL_DAMAGE;

    if (animal.health <= MINIMUM_HP) {
      Animal.alive = Animal.alive.filter((a) => a !== animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
