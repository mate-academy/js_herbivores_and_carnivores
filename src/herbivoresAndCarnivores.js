'use strict';

class Animal {
  static alive = [];
  static FULL_HEALTH = 100;
  static BITE_STRENGTH = 50;

  constructor(name, health = Animal.FULL_HEALTH) {
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
  bite(animal) {
    if (animal instanceof Carnivore || animal.hidden) {
      return;
    }

    animal.health -= Animal.BITE_STRENGTH;

    if (animal.health <= 0) {
      Animal.alive = Animal.alive.filter((beast) => beast !== animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
