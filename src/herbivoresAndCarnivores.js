'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
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

  bite(herb) {
    if (!herb.hidden && herb instanceof Herbivore) {
      herb.health -= 50;
    }

    if (herb.health === 0) {
      Animal.alive = Animal.alive.filter(predator => predator.health);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
