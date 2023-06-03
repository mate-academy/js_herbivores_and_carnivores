'use strict';

class Animal {
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;

    Animal.alive.push(this);
  }

  decreaseHealth(amount) {
    this.health -= amount;

    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter(animal => animal !== this);
    }
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.decreaseHealth(50);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
