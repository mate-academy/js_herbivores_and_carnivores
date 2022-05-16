'use strict';

class Animal {
  // static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
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
  bite() {
    // Herbivore.health -= 50;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
