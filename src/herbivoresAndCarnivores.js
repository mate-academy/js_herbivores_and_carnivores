'use strict';

class Animal {
  static alive = [];
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  bitten() {
    if (this.health - 50 > 0) {
      this.health -= 50;
    } else {
      Animal.alive.splice(Animal.alive.indexOf(this), 1);
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
    if (!(animal instanceof Carnivore) && !animal.hidden) {
      animal.bitten();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
