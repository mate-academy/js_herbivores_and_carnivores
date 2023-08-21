'use strict';

const HEALTH_START_VALUE = 100;
const BEAT_VALUE = 50;

class Animal {
  constructor(name, health = HEALTH_START_VALUE) {
    this.name = name;
    this.health = health;
  }
}

Animal.alive = [];

Animal.filterAliveAnimals = (animal) => {
  Animal.alive = Animal.alive.filter(({ health }) => health !== 0);
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
    const isHerbivore = animal instanceof Herbivore;

    if (isHerbivore && !animal.hidden) {
      animal.health = animal.health - BEAT_VALUE;

      if (animal.health <= 0) {
        Animal.filterAliveAnimals(animal);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
