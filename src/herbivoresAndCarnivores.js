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
  constructor(name, hidden = false) {
    super(name);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  static DAMAGE = 50;

  bite(animal) {
    if (!(animal instanceof Herbivore) || animal.hidden) {
      return;
    }

    animal.health -= Carnivore.DAMAGE;

    if (animal.health <= 0) {
      Animal.alive = Animal.alive.filter((item) => item !== animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
