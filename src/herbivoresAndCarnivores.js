'use strict';

class Animal {
  constructor(name) {
    this.health = 100;
    this.name = name;
    Animal.alive.push(this);
  }

  removeFromAlive() {
    Animal.alive = Animal.alive.filter(animal => animal.health !== 0);
  }
}

Animal.alive = [];

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
  bite(victim) {
    if (victim instanceof Herbivore && !victim.hidden) {
      victim.health -= 50;

      if (victim.health <= 0) {
        this.removeFromAlive();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
