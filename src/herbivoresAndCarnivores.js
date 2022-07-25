'use strict';

class Animal {
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
  }

  updateAlivesList() {
    Animal.alive = Animal.alive.filter(animal => animal.health > 0);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name);

    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name);

    Animal.alive.push(this);
  }

  bite(enemy) {
    if (enemy instanceof Herbivore && !enemy.hidden) {
      enemy.health -= 50;
    }

    if (enemy.health <= 0) {
      this.updateAlivesList();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
