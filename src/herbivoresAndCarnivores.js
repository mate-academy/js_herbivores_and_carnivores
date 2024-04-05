'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    const health = 100;

    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static checkHealth() {
    const zeroHealth = 0;

    this.alive = this.alive.filter((animal) => animal.health > zeroHealth);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(victim) {
    const damage = 50;

    if (victim instanceof Herbivore && !victim.hidden) {
      victim.health -= damage;
      Animal.checkHealth();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
