'use strict';

class Animal {
  static dying() {
    const dyIndex = this.alive.findIndex(animal => animal.health <= 0);

    Animal.alive.splice(dyIndex, 1);
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
    if (this.hidden) {
      this.hidden = false;
    } else {
      this.hidden = true;
    }
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal.hasOwnProperty('hidden') && animal.hidden === false) {
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
