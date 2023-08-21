'use strict';

const HEALTH_START_VALUE = 100;

class Animal {
  constructor(name, health = HEALTH_START_VALUE) {
    this.name = name;
    this.health = health;
  }
}

Animal.alive = [];

Animal.checkAnimals = (animal) => {
  if (animal.health <= 0) {
    Animal.alive = Animal.alive.filter(beast =>
      beast.health !== 0);
  }
};

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super();
    this.hidden = hidden;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super();
    Animal.alive.push(this);
  }

  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health = animal.health - 50;

      Animal.checkAnimals(animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
