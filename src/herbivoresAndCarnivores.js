'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  static removeIfDead(animal) {
    if (animal.health <= 0) {
      Animal.alive = Animal.alive.filter((a) => a !== animal);
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
    if (!(animal instanceof Herbivore)) {
      return;
    }

    if (animal.hidden) {
      return;
    }

    animal.health -= 50;
    Animal.removeIfDead(animal);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
