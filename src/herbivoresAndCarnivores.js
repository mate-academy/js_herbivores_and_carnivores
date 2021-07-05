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
    if (target.__proto__ === Herbivore.prototype && !target.hidden) {
      target.health -= 50;
    }
    Animal.alive = Animal.alive.filter(isAlive => isAlive.health !== 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
