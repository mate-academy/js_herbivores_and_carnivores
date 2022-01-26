'use strict';

class Animal {
  constructor(name, health) {
    this.health = health || 100;
    this.neme = name;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor() {
    super();
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (!target.hidden && !(target instanceof Carnivore)) {
      target.health -= 50;

      if (target.health === 0) {
        Animal.alive = Animal.alive
          .filter(deadAnimal => deadAnimal !== target);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
