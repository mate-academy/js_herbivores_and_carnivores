'use strict';

class Animal {
  constructor(name) {
    Animal.alive = [];
    this.name = name;
    this.health = 100;
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }

  bite(target) {
    if (target.hidden === false) {
      target.health -= 50;
    }
    Animal.alive = Animal.alive.filter(element => element.health !== 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
