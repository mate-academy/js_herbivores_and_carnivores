'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  die() {
    Animal.alive = Animal.alive.filter(animal => animal !== this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    if (this.hidden) {
      this.hidden = false;
    } else {
      this.hidden = true;
    }
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;
    }

    if (animal.health <= 0) {
      Animal.alive = Animal.alive.filter(item => item.health > 0);
    };
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
