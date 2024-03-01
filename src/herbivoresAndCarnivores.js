'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
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

  decreaseHealth(amount = 50) {
    this.health -= amount;

    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter(a => a !== this);
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
