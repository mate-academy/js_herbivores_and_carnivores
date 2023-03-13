'use strict';

class Animal {
  health = 100;

  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= 50;

      Animal.alive = Animal.alive.filter(x => x.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
