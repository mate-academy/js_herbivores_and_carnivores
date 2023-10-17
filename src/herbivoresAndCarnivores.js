'use strict';

class Animal {
  constructor(health, name) {
    this.health = 100;
    this.name = name;
    Animal.alive.push(this);
  }

  static removeDeadAnimals() {
    Animal.alive = Animal.alive.filter(animal => animal.health > 0);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(health, name) {
    super(health, name);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;
    }

    if (target.health <= 0) {
      Animal.removeDeadAnimals();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
