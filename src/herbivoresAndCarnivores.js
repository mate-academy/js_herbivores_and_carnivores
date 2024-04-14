'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static deadAnimal(animal) {
    // Variant with filter:
    // Animal.alive = Animal.alive.filter(a => a !== animal);

    const idx = Animal.alive.indexOf(animal);

    if (idx !== -1) {
      Animal.alive.splice(idx, 1);
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
  bite(target) {
    if (
      target instanceof Carnivore ||
      (target instanceof Herbivore && target.hidden)
    ) {
      return;
    }

    target.health -= 50;

    if (target.health <= 0) {
      Animal.deadAnimal(target);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
