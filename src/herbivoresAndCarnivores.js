'use strict';

class Animal {
  static add(animal) {
    this.alive.push(animal);
  }

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.add(this);
  }

  static removeDead() {
    this.alive = this.alive.filter(animal => animal.health > 0);
  }
}

Animal.alive = [];

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
  bite(animal) {
    if (animal instanceof Herbivore && animal.hidden === false) {
      animal.health -= 50;
      Animal.removeDead();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
