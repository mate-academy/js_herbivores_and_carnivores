'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.name = name;
    this.hidden = false;
    Animal.alive.push(this);
  }
  hide() {
    if (this.hidden) {
      this.hidden = false;
    } else {
      this.hidden = true;
    }
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    this.name = name;

    Animal.alive.push(this);
  }
  bite(name) {
    if (name instanceof Herbivore && name.hidden === false) {
      name.health -= 50;
    }

    if (name.health === 0) {
      const index = Animal.alive.findIndex(animal => animal.name === name);

      Animal.alive.splice(index, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
