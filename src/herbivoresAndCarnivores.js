'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  };
}

Animal.alive = [];
class Herbivore extends Animal {
  constructor(name, health) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target.hasOwnProperty('hidden') && target.hidden === false) {
      target.health -= 50;

      const deadAnimal = Animal.alive.findIndex(animal => animal.health <= 0);

      delete Animal.alive[deadAnimal];
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
