'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
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
  bite(enemy) {
    if (enemy instanceof Herbivore && enemy.hidden === false) {
      enemy.health -= 50;

      if (enemy.health <= 0) {
        Animal.alive.splice(Animal.alive.indexOf(enemy), 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
