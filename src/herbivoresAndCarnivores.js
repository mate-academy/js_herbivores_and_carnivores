'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }

  die() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
  }
}

class Herbivore extends Animal {
  hidden = false;
  health = 100;

  hide() {
    this.hidden = true;
  }

  takeDamage(damage) {
    this.health -= damage;

    if (this.health <= 0) {
      this.die();
    }
  }
}

class Carnivore extends Animal {
  health = 100;

  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.takeDamage(50);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
