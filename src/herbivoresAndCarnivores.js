'use strict';

class Animal {
  constructor(health, name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor() {
    super();
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(enemy) {
    if (!enemy.hidden && enemy instanceof Herbivore) {
      enemy.health -= 50;
    }

    if (enemy.health === 0) {
      Animal.alive = Animal.alive.filter(beast => beast !== enemy);
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
