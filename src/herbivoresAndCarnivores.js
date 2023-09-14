'use strict';

class Animal {
  constructor(health, name) {
    this.health = health || 100;
    this.name = name;
    Animal.addAlive(this);
  }

  static addAlive(animal) {
    if (!Animal.alive) {
      Animal.alive = [];
    }
    Animal.alive.push(animal);
  }

  static removeDead(animal) {
    Animal.alive = Animal.alive.filter((item) => item.health > 0);
  }
}

class Herbivore extends Animal {
  constructor(health, name) {
    super(health, name);
    this.name = name;
    this.health = 100;
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(health, name) {
    super(health, name);
    this.name = name;
    this.health = 100;
  }

  bite(animal) {
    if (animal instanceof Herbivore && animal.hidden === false) {
      animal.health -= 50;

      if (animal.health <= 0) {
        Animal.removeDead(animal);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
