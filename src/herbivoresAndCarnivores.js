'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.health = 100;
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
    this.health = 100;
    Animal.alive.push(this);
  }

  bite(name) {
    if (name.hidden === false) {
      name.health -= 50;
    }

    if (name.health === 0) {
      const deadIndex = Animal.alive.findIndex(el => el === name);

      Animal.alive.splice(deadIndex, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
