'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  die() {
    const animal = Animal.alive;
    const index = animal.indexOf(this);

    if (animal !== 0) {
      animal.splice(index, 1);
    }
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, hidden) {
    super(name, health, hidden);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (!herbivore.hidden && herbivore instanceof Herbivore) {
      herbivore.health -= 50;

      if (herbivore.health <= 0) {
        herbivore.die();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
