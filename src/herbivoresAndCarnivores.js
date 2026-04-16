'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }

  takeDamage(amount) {
    this.health -= amount;

    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter(animal => animal.health > 0);
    }
  }
}

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
  bite(animal) {
    if (!(animal instanceof Herbivore) || animal.hidden) {
      return;
    }

    animal.takeDamage(50);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
