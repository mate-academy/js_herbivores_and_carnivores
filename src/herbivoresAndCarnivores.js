'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
    Animal.alive[Animal.alive.findIndex((item) => item === this)].hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    Animal.alive.push(this);
  }

  bite(target) {
    if (target.hasOwnProperty('hidden') && target.hidden === false) {
      target.health -= 50;
      Animal.alive[Animal.alive.findIndex((item) => item === target)] = target;
    }

    if (target.health <= 0) {
      Animal.alive = Animal.alive.filter((item) => item !== target);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
