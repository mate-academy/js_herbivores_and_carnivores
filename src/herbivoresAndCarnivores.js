'use strict';

class Animal {
  constructor(
    name,
    health = 100,
  ) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(
    name,
    health,
    hidden = false,
  ) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Carnivore) {
      return;
    };

    if (target instanceof Herbivore && target.health === 0) {
      return;
    };

    if (target instanceof Herbivore && target.hidden !== true) {
      target.health -= 50;
      Animal.alive = Animal.alive.filter(animal => animal.health > 0);
    };
  };
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
