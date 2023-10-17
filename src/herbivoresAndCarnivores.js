'use strict';

class Animal {
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }

  static filterDead() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);

    return Animal.alive;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (!target.hidden && target instanceof Herbivore) {
      target.health -= 50;
    }

    if (target.health <= 0) {
      Animal.filterDead();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
