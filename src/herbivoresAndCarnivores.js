'use strict';

class Animal {
  static alive = [];
  static remove(dead) {
    this.alive = this.alive.filter(animal => animal !== dead);
  }
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health, hidden) {
    super(name, health);
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Herbivore && target.hidden !== true) {
      target.health -= 50;
    }

    if (target.health === 0) {
      Animal.remove(target);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
