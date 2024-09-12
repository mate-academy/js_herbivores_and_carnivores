'use strict';

class Animal {
  static dying() {
    this.alive = this.alive.filter(animal => animal.health > 0);
  }

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;

    Animal.alive.push(this);
  }
}
Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);

    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;
    }

    if (animal.health <= 0) {
      Animal.dying();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
