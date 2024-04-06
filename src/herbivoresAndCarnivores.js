'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static alive = [];

  static removeAlive(animal) {
    this.alive = this.alive.filter((el) => el !== animal);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name, 100);
  }

  hidden = false;

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name, 100);
  }

  bite(animal) {
    const isNoHiddenHerbivore = !animal.hidden && animal instanceof Herbivore;

    if (isNoHiddenHerbivore) {
      animal.health -= 50;

      if (animal.health <= 0) {
        Animal.removeAlive(animal);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
