'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }

  setHealth(health) {
    this.health = health;

    if (this.health <= 0) {
      const index = Animal.alive.indexOf(this);

      if (index !== -1) {
        Animal.alive.splice(index, 1);
      }
    }
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (!(animal instanceof Herbivore)) {
      return;
    }

    if (animal.hidden) {
      return;
    }

    animal.setHealth(animal.health - 50);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
