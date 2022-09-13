'use strict';

class Animal {
  constructor(health, name) {
    this.health = 100;
    this.name = name;
  }
}

class Herbivore extends Animal {
  constructor(health, name, hidden) {
    super(health, name, hidden);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(health, name, hidden) {
    super(health, name, hidden);
    this.hidden = hidden;
  }

  bite(health) {
    Herbivore.health -= 50;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
