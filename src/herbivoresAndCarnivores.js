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
  bite(enemy) {
    if (enemy instanceof Herbivore && !enemy.hidden) {
      enemy.health -= 50;
    }

    if (enemy.health <= 0) {
      Animal.alive = Animal.alive.filter(animal => animal.health);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
