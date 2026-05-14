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
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Carnivore || target.hidden || this.health <= 0) {
      return;
    }

    target.health -= 50;

    Animal.alive = Animal.alive.filter((animal) => {
      return animal.health > 0;
    });
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
