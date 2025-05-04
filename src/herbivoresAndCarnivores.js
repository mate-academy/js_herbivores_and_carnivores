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
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(otherAnimal) {
    if (!(otherAnimal instanceof Herbivore)) {
      return;
    }

    if (otherAnimal.hidden) {
      return;
    }

    otherAnimal.health -= 50;

    if (otherAnimal.health <= 0) {
      Animal.alive = Animal.alive.filter((i) => i !== otherAnimal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
