'use strict';

const FULL_HEALTH = 100;
const ANIMAL_DIED = 0;
const BITE_DEMAGE = 50;

class Animal {
  constructor(name) {
    this.name = name;
    this.health = FULL_HEALTH;

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
  bite(animal) {
    if (!animal.hidden && animal instanceof Herbivore) {
      animal.health -= BITE_DEMAGE;
    }

    if (animal.health === ANIMAL_DIED) {
      Animal.alive = Animal.alive.filter((beast) => beast.health > ANIMAL_DIED);
    }
  }
}
Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
