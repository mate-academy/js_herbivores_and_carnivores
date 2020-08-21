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
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target.hidden !== true && target instanceof Herbivore) {
      if (target.health <= 50) {
        Animal.alive.splice(Animal.alive.indexOf(target), 1);
      } else {
        target.health -= 50;
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
