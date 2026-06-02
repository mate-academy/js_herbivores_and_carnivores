'use strict';

class Animal {
  static alive = [];

  constructor(name, health) {
    this.name = name;
    this.health = health || 100;
  }
}

class Herbivore extends Animal {
  hidden = false;

  constructor(name, health) {
    super(name, health);
    this.health = health || 100;
    this.name = name;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.name = name;
    this.health = health || 100;
    Animal.alive.push(this);
  }

  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;
    }
    Animal.alive = Animal.alive.filter((item) => item.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
