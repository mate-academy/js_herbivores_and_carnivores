'use strict';

class Animal {
  // static alive = [];

  constructor(health = 100, name) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }

  // static deleteDeadAnimal() {
  //   Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  // }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(health, name);
    this.hidden = false;
  }

  hide() {
    if (this.hidden === false) {
      this.hidden = true;
    } else {
      this.hidden = false;
    }
  }
}

class Carnivore extends Animal {
  constructor(health, name) {
    super(name, health);
  }

  bite(victum) {
    if (victum.hidden === false
      && victum instanceof Herbivore) {
      victum.health -= 50;
    }

    if (victum.health === 0) {
      Animal.alive = Animal.alive.filter(aliveAnimal => aliveAnimal !== victum);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
