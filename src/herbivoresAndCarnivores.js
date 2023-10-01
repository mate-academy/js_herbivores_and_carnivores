'use strict';

class Animal {
  constructor(name) {
    this.health = 100;
    this.name = name;

    // Linter is not allowing us to use static =(

    if (!Animal.alive) {
      Animal.alive = [];
    }
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }

  bite(animal) {
    if (!(animal instanceof Carnivore) && !animal.hidden) {
      animal.health -= 50;

      if (animal.health === 0) {
        Animal.alive = Animal.alive.filter(beast => beast.name !== animal.name);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
