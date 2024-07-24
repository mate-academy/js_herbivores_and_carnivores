'use strict';

class Animal {
  static alive = [];
  static DEFAULT_HEALTH = 100;
  static DEFAULT_BITE = 50;

  constructor(name, health = Animal.DEFAULT_HEALTH) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  die() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
  }
}

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
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= Carnivore.DEFAULT_BITE;

      if (animal.health <= 0) {
        animal.die();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
