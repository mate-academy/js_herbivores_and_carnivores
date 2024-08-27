'use strict';

class Animal {
  static alive = [];
  health = 100;

  constructor(name) {
    this.name = name;
  }

  addAliveAnimal() {
    Animal.alive.push(this);
  }

  damageDone() {
    this.health -= 50;

    if (this.health <= 0) {
      this.checkAlive();
    }
  }

  checkAlive() {
    Animal.alive = Animal.alive.filter((aliveAnimal) => aliveAnimal !== this);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
    this.addAliveAnimal();
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    this.addAliveAnimal();
  }

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
