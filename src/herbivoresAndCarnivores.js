'use strict';

class Animal {
  static alive = [];
  health = 100;

  constructor(name) {
    this.name = name;

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
  bite(target) {
    const checkPrototype = target instanceof Herbivore && !target.hidden;

    if (checkPrototype) {
      target.health -= 50;

      Animal.alive = Animal.alive
        .filter(animal => animal.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
