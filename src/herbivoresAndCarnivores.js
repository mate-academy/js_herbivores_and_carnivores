'use strict';

class Animal {
  constructor() {
    this.name = '';
    this.health = 100;
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
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Herbivore && target.hidden === false) {
      target.health -= 50;
    }

    if (target.health <= 0) {
      Animal.alive = Animal.alive.filter((x) => x !== target);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
