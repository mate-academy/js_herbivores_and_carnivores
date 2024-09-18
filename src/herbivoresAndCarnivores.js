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
  constructor(name, health, hidden = false) {
    super(name, health);

    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // eslint-disable-next-line no-useless-constructor
  constructor(name, health) {
    super(name, health);
  }

  bite(target) {
    if (target instanceof Herbivore && target.hidden === false) {
      target.health -= 50;
    }

    Animal.alive = Animal.alive.filter((a) => a.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
