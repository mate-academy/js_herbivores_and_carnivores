'use strict';

class Animal {
  // Statyczna tablica współdzielona przez wszystkie instancje
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this); // Każde nowe zwierzę trafia do rejestru żywych
  }

  die() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
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
    // does nothing if target is not a Herbivore
    if (!(target instanceof Herbivore)) {
      return;
    }

    // does nothing if herbivore is hiding
    if (target.hidden) {
      return;
    }

    target.health -= 50;

    if (target.health <= 0) {
      target.die();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
