'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }
}

// ? why i cannot use static in a class
Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }

  bite(herbivore) {
    const isCarnivore = herbivore instanceof Carnivore;
    const isHidden = herbivore.hidden || false;

    if (isCarnivore || isHidden) {
      return;
    }

    herbivore.health -= 50;

    if (herbivore.health > 0) {
      return;
    }

    Animal.alive = Animal.alive
      .filter((animal) => animal.name !== herbivore.name);
  };
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
