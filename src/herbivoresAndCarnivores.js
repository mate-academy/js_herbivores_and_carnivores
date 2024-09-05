'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }

  isAlive() {
    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== this);
    }
  }

  setHealth(health) {
    this.health = health;
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
  bite(herb) {
    if (herb instanceof Herbivore && !herb.hidden) {
      herb.setHealth(herb.health - 50);
      herb.isAlive();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
