'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    if (this.health > 0) {
      Animal.alive.push(this);
    }
  }

  checkHealth() {
    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
    }
  }
}

class Herbivore extends Animal {
  hidden = false;
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Herbivore && target.hidden === false) {
      target.health -= 50;
      target.checkHealth();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
