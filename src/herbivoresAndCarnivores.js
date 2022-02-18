'use strict';

class Animal {
  static birth(beast) {
    this.alive.push(beast);
  }

  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.birth(this);
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
  bite(victim) {
    if (!(victim instanceof Carnivore) && !victim.hidden) {
      victim.health -= 50;

      if (victim.health === 0) {
        const index = Animal.alive.indexOf(victim);

        if (index !== -1) {
          Animal.alive.splice(index, 1);
        }
      }
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
