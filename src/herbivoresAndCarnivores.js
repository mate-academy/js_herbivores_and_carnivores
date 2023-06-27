'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    if (!Animal.alive) {
      Animal.alive = [];
    }

    Animal.alive.push(this);
  }

  decreaseHealth() {
    if (this.health > 0) {
      this.health -= 50;
    }

    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter(animal => animal.health > 0);
    }
  }
}

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
  constructor(name, health = 100) {
    super(name, health);
  }

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
