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
  hide() {
    this.hidden ? this.hidden = false
      : this.hidden = true;
  }

  constructor(name) {
    super(name);
    this.hidden = false;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (!target.hidden && target instanceof Herbivore) {
      target.health -= 50;
    }

    if (target.health <= 0) {
      Animal.alive.splice(Animal.alive.indexOf(target), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
