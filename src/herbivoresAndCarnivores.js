'use strict';

class Animal {
  static alive = [];

  constructor(health, name) {
    this.health = 100;
    this.name = name;
    Animal.alive.push(this);
  }

  die() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
  }

  takeDamage(amount) {
    this.health -= amount;

    if (this.health <= 0) {
      this.die();
    }
  }
}

class Herbivore extends Animal {
  constructor(health, name, hidden = false) {
    super(health, name);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Herbivore && target.hidden === false) {
      target.takeDamage(50);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
