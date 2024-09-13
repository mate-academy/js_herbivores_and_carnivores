'use strict';

class Animal {
  static alive = [];
  dead = false;

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
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
  bite(animal) {
    if (
      animal instanceof Herbivore &&
      animal.hidden === false &&
      animal.dead !== true
    ) {
      animal.health -= 50;

      if (animal.health <= 0) {
        animal.dead = true;
        Animal.alive = Animal.alive.filter((beast) => beast !== animal);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
