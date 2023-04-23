'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);
    Animal.alive.push(this);
  }

  bite(animal) {
    if (animal.hidden === false) {
      animal.health -= 50;
    }

    let indexOfDead = 0;

    indexOfDead = Animal.alive.findIndex(beast => beast.health === 0);

    if (indexOfDead >= 0) {
      Animal.alive.splice(indexOfDead, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
