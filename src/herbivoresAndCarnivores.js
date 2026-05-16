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
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(herbivore) {
    if (herbivore instanceof Carnivore || herbivore.hidden) {
      return;
    }

    herbivore.health = herbivore.health - 50;

    const alives = Animal.alive.filter((animal) => animal.health > 0);

    Animal.alive = alives;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
