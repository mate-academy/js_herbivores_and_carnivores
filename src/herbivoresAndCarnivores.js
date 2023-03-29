'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
    // i have to pass this prop here because i had some eslint error.
  }

  hide() {
    this.hidden = true;
  };
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  bite(animal) {
    if (animal.hidden || animal instanceof Carnivore) {
      return;
    }
    animal.health -= 50;

    if (animal.health === 0) {
      Animal.alive = Animal.alive.filter(beast => {
        return beast.name !== animal.name;
      });
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
