'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
  isAlive(name) {
    if (name.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== name);
    }
  }

  hide() {
    this.hidden = true;
  }
}

class Herbivore extends Animal {
  hidden = false;
}

class Carnivore extends Animal {
  bite(name) {
    if (name instanceof Herbivore && name.hidden === false) {
      name.health -= 50;
      this.isAlive(name);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
