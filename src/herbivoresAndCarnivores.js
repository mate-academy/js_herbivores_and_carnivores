'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

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
  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;
    };

    if (target.health === 0) {
      Animal.alive = Animal.alive.filter(animal => animal !== target);
    };
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
