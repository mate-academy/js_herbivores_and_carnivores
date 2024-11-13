'use strict';

const FULL_HEALTH = 100;
const DAMAGE_FROM_BITE = 50;

class Animal {
  static alive = [];

  constructor(name, health = FULL_HEALTH) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  checkHealth() {
    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== this);
    }
  }
}

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
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= DAMAGE_FROM_BITE;
      animal.checkHealth();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
