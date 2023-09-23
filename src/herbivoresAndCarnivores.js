'use strict';

class Animal {
  constructor(health = 100, name) {
    this.health = health;
    this.name = name;

    if (typeof Animal.alive === 'undefined') {
      Animal.alive = [];
    }
    Animal.alive.push(this);
  }

  static removeFromAlive(animal) {
    Animal.alive = Animal.alive.filter((a) => a !== animal);
  }

  die() {
    Animal.removeFromAlive(this);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.health = 100;
    this.name = name;
    this.hidden = false;
  }

  hide(hidden) {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    this.health = 100;
    this.name = name;
  }
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;

      if (animal.health <= 0) {
        Animal.removeFromAlive(animal);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
