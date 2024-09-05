'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  getDamage(damage) {
    this.health -= damage;

    if (this.health <= 0) {
      this.die();
    }
  }

  die() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
  }
}

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  bite(target) {
    if (target instanceof Herbivore) {
      if (!target.hidden) {
        target.getDamage(50);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
