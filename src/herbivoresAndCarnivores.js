'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }

  static removeKilled() {
    Animal.alive = Animal.alive.filter(({ health }) => health > 0);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, hidden) {
    super(name);
    this.hidden = hidden || false;
  }

  hide() {
    if (this.hidden === true) {
      this.hidden = false;
    }
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    const isHerbivore = herbivore instanceof Herbivore;

    if (herbivore.hidden !== true && isHerbivore) {
      herbivore.health -= 50;
    }

    if (herbivore.health <= 0) {
      Animal.removeKilled();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
