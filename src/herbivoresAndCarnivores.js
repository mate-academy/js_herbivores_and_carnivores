'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static removeFromAlive(animal) {
    Animal.alive = Animal.alive.filter((a) => a !== animal);
  }

  decreaseHealth(amount) {
    this.health -= amount;

    if (this.health <= 0) {
      Animal.removeFromAlive(this);
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
    if (
      animal instanceof Carnivore ||
      (animal instanceof Herbivore && animal.hidden)
    ) {
      return;
    }
    animal.decreaseHealth(50);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
