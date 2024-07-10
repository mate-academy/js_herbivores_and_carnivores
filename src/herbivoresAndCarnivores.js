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
  bite(herbivore) {
    if (herbivore instanceof Carnivore || herbivore.hidden) {
      return;
    } else {
      herbivore.health -= 50;
    }

    if (herbivore.health <= 0) {
      const indexHerbivore = Animal.alive.findIndex(
        (item) => item === herbivore,
      );

      Animal.alive.splice(indexHerbivore, 1);
    }

    return Animal.alive;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
