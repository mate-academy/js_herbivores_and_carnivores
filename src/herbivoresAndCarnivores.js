'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }

  kill() {
    this.health -= 50;

    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter((x) => x !== this);
    }
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
    if (animal instanceof Herbivore) {
      if (!animal.hidden) {
        animal.kill();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
