'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

// ? why i cannot use static in a class
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
  bite(target) {
    const isCarnivore = target instanceof Carnivore;
    const isHidden = target.hidden;

    if (isCarnivore || isHidden) {
      return;
    }

    target.health -= 50;

    if (target.health > 0) {
      return;
    }

    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  };
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
