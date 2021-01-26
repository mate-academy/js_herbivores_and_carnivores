'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

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
  bite(creature) {
    const { alive } = Animal;

    if (!creature.hidden && creature instanceof Herbivore) {
      creature.health -= 50;
    }

    if (creature.health === 0) {
      Animal.alive = alive.splice(alive.findIndex(
        (e) => e === creature) - 1, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
