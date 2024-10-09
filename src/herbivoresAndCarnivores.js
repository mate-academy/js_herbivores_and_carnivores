'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  checkHealth() {
    if (this.health <= 0) {
      this.die();
    }
  }

  die() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }
  bite(herbivore) {
    if (herbivore instanceof Herbivore) {
      if (herbivore.hidden !== true) {
        herbivore.health -= 50;
        herbivore.checkHealth();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
