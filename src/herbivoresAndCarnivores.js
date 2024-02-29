'use strict';

const ANIMAL_HEALTH = 100;
const HEALTH_REDUCER = 50;

class Animal {
  constructor(name) {
    this.name = name;
    this.health = ANIMAL_HEALTH;
    Animal.alive.push(this);
  }

  static removeDeadAnimals() {
    Animal.alive = Animal.alive.filter(beast => beast.health > 0);
  }
}
Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, hidden = false) {
    super(name);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(victim) {
    if (victim instanceof Herbivore && !victim.hidden) {
      victim.health -= HEALTH_REDUCER;
    }

    if (victim.health <= 0) {
      Animal.removeDeadAnimals();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
