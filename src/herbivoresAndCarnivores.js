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
    if (target instanceof Carnivore !== true && target.hidden !== true) {
      target.health -= 50;
    }

    if (target.health <= 0) {
      const ind = Animal.alive.indexOf(target);

      Animal.alive.splice(ind, ind + 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
