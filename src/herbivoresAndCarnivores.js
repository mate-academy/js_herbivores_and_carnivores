'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  decrease(damage) {
    this.health -= damage;

    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter(animal => animal !== this);
    }
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.decrease(50);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
