'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }

  static removeDeadAnimal() {
    Animal.alive = Animal.alive.filter(animal => animal.health > 0);
  }
}

class Herbivore extends Animal {
  constructor() {
    super();

    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target.hidden === false && target instanceof Herbivore) {
      target.health -= 50;

      if (target.health <= 0) {
        Animal.removeDeadAnimal();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
