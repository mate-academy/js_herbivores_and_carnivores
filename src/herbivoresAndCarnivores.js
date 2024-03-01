'use strict';

const currentHealth = 100;

class Animal {
  static alive = [];

  constructor(name, health = currentHealth) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static getAlive() {
    return Animal.alive;
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
  bite(carnivoreBite) {
    if (!(carnivoreBite instanceof Carnivore) && !carnivoreBite.hidden) {
      carnivoreBite.health -= 50;

      if (carnivoreBite.health <= 0) {
        Animal.alive = Animal.alive.filter(animal => animal !== carnivoreBite);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
