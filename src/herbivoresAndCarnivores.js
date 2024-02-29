'use strict';

class Animal {
  static alive = [];
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  static removeFromAlive(animal) {
    Animal.alive = Animal.alive.filter(a => a !== animal);
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

  decreaseHealth() {
    this.health -= 50;

    if (this.health <= 0) {
      Animal.removeFromAlive(this);
    }
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.decreaseHealth();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
