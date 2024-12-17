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
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  static DAMAGE = 50;

  bite(prey) {
    if (!(prey instanceof Herbivore)) {
      return;
    }

    if (prey.hidden === true) {
      return;
    }

    if (prey.health <= Carnivore.DAMAGE) {
      Animal.alive = Animal.alive.filter((animal) => animal !== prey);

      return;
    }

    prey.health -= Carnivore.DAMAGE;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
