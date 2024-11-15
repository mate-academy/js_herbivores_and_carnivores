'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.addAlive(this);
  }

  static alive = [];

  static addAlive(animal) {
    Animal.alive.push(animal);
  }
  static removeDead(animal) {
    Animal.alive = Animal.alive.filter((aliveAnimal) => aliveAnimal !== animal);
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
  // eslint-disable-next-line no-useless-constructor
  constructor(name) {
    super(name);
  }

  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;

      if (target.health <= 0) {
        Animal.removeDead(target);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
