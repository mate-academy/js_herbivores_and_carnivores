'use strict';

const ANIMAL_HEALTH = 100;
const ANIMAL_DAMAGE = 50;

class Animal {
  constructor(name) {
    this.name = name;
    this.health = ANIMAL_HEALTH;
    Animal.alive.push(this);
  }
  static alive = [];
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
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= ANIMAL_DAMAGE;

      if (animal.health <= 0) {
        Animal.alive = Animal.alive.filter((item) => item !== animal);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
