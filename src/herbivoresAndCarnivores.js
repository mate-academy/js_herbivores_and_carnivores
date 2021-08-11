'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);

    this.hidden = false;

    Animal.alive.push(this);
  }

  hide() {
    if (this.hidden === false) {
      this.hidden = true;
    } else {
      this.hidden = false;
    }
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);

    Animal.alive.push(this);
  }

  bite(animal) {
    if (animal instanceof Herbivore && animal.hidden === false) {
      animal.health -= 50;
    }

    if (animal.health === 0) {
      Animal.alive = Animal.alive.filter(item => item.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
