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
  bite(someAnimal) {
    if (!(someAnimal instanceof Herbivore) || someAnimal.hidden) {
      return;
    }

    someAnimal.health -= 50;

    if (someAnimal.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== someAnimal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
