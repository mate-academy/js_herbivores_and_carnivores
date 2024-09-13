'use strict';

const FULL_HEALTH_POINT = 100;
const DEMAGE_CARNIVORE = 50;
const ANIMAL_DEATH = 0;

class Animal {
  constructor(name, health = FULL_HEALTH_POINT) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }

  static alive = [];
}
class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= DEMAGE_CARNIVORE;
    }

    Animal.alive = Animal.alive.filter(({ health }) => health > ANIMAL_DEATH);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
