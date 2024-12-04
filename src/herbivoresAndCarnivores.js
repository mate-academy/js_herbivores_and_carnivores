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
  bite(animal) {
    if (animal.hidden) {
      return;
    }

    if (animal instanceof Carnivore) {
      return;
    }

    animal.health -= 50;

    if (animal.health === 0) {
      const newArr = Animal.alive.filter((value) => value !== animal);

      Animal.alive = newArr;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
