'use strict';

class Animal {
  static alive = [];

  constructor(health = 100, name) {
    this.health = health;
    this.name = name;
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
  constructor(name, health = 100, hidden = false) {
    super(health, name);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(health, name);
  }

  bite(target) {
    if (target instanceof Carnivore) {
      return;
    }

    if (target.hidden) {
      return;
    }
    target.health -= 50;
    target.checkHealth();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
