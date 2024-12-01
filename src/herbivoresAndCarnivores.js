'use strict';

class Animal {
  static alive = [];
  static carnavorBiteDamage = 50;
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  bitten(damage) {
    if (this.health - damage) {
      this.health -= damage;
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
      animal.bitten(Animal.carnavorBiteDamage);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
