'use strict';

class Animal {
  constructor(name) {
    this.health = 100;
    this.name = name;

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
    if (target.constructor === Herbivore && !target.hidden) {
      target.health -= 50;
    }

    Animal.alive = Animal.alive.filter(({ health }) => health !== 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
