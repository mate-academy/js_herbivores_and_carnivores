'use strict';

class Animal {
  constructor() {
    this.health = 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super();
    this.hidden = false;
    this.name = name;
  }

  hide() {
    if (!this.hidden) {
      this.hidden = !this.hidden;
    };
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }

  bite(animal) {
    if (animal instanceof Herbivore && animal.hidden === false) {
      animal.health -= 50;
    }

    if (animal.health === 0) {
      const index = Animal.alive.indexOf(animal);

      Animal.alive = Animal.alive.filter((beast, i) => i !== index);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
