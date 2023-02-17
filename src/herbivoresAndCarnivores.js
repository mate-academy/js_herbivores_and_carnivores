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
  constructor() {
    super();
    Animal.alive.push(this);
  }

  bite(animal) {
    const isHerbivore = animal instanceof Herbivore;
    const isHidden = !animal.hidden;

    if (isHerbivore && isHidden) {
      animal.health -= 50;
    }

    if (animal.health === 0) {
      Animal.alive = Animal.alive.filter((item) => item.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
