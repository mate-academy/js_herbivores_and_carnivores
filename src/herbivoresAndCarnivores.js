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
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(prey) {
    if (prey instanceof Carnivore
      || prey.hidden === true) {
      return;
    }

    prey.health -= 50;

    if (prey.health <= 0) {
      const preyInd = Animal.alive.indexOf(prey);

      Animal.alive.splice(preyInd, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
