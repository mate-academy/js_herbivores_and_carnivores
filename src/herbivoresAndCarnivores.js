'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  takeDamage(damage) {
    this.health -= damage;

    if (this.health <= 0) {
      this.die();
    }
  }

  hide() {
    this.hidden = true;
  }

  die() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(herbivore) {
    if (herbivore instanceof Herbivore) {
      if (!herbivore.hidden) {
        herbivore.takeDamage(50);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
