'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  decreaseHealth(amount) {
    this.health -= amount;

    if (this.health <= 0) {
      this.die();
    }
  }

  die() {
    Animal.alive = Animal.alive.filter(animal => animal !== this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);

    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(prey, amount = 50) {
    if (prey.hidden || prey instanceof Carnivore) {
      return;
    }
    prey.decreaseHealth(amount);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
