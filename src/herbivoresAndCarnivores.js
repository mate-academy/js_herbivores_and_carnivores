'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target.hidden === false && target.health !== 0) {
      target.health -= 50;
    }

    Animal.alive = Animal.alive.filter(({ health }) => health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
