'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = (this.hidden === false);
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }

  bite(animal) {
    animal.health
      -= (animal instanceof Herbivore && animal.hidden === false)
        ? 50
        : 0;

    Animal.alive = (animal.health === 0)
      ? Animal.alive.filter(beast => beast.health > 0)
      : Animal.alive;
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
