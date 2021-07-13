'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }
}
Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    this.bitDamage = 50;
  }

  bite(herbivore) {
    if (herbivore instanceof Herbivore && herbivore.hidden !== true) {
      herbivore.health -= this.bitDamage;
    }

    if (herbivore.health === 0) {
      Animal.alive = Animal.alive.filter(animal => animal.hp > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
