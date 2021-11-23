'use strict';

class Animal {
  static alive = [];

  static addAlive(animal) {
    this.alive.push(animal);
  }

  constructor(name) {
    this.name = name;
  }

  health = 100;
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
    Animal.addAlive(this);
  }

  hide() {
    if (this.hidden === true) {
      this.hidden = false;
    } else {
      this.hidden = true;
    }
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.addAlive(this);
  }

  bite(input) {
    if (input instanceof Herbivore && input.hidden === false) {
      input.health -= 50;
    }

    if (input.health === 0) {
      Animal.alive = Animal.alive.filter(animal => animal.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
