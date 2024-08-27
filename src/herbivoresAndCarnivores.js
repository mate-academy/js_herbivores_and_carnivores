'use strict';

class Animal {
  static alive = [];
  static checkAlive(diedAnimal) {
    Animal.alive = Animal.alive.filter(
      (aliveAnimal) => aliveAnimal !== diedAnimal,
    );
  }

  health = 100;

  constructor(name) {
    this.name = name;
    this.addAliveAnimal();
  }

  addAliveAnimal() {
    Animal.alive.push(this);
  }

  damageDone() {
    this.health -= 50;

    if (this.health <= 0) {
      Animal.checkAlive(this);
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
  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.damageDone();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
