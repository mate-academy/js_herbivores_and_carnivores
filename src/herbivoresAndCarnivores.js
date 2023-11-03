'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static removeFromAlive(deadAnimal) {
    Animal.alive = Animal.alive.filter((animal) => animal !== deadAnimal);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);

    this.hidden = false;
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
        Animal.removeFromAlive(victim);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
