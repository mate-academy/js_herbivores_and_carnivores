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
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    const CARNIVORE_BITE = 50;

    if (!animal.hidden && animal instanceof Herbivore) {
      animal.health -= CARNIVORE_BITE;
    }

    if (animal.health <= 0) {
      Animal.alive = Animal.alive.filter(
        beast => beast.health > 0
      );
    }

    return animal;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
