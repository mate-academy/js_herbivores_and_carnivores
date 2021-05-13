'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}
// other options linter blocks
Animal.alive = [];

class Herbivore extends Animal {
  hide() {
    this.hidden
      ? this.hidden = false
      : this.hidden = true;
  }
}
// other options linter blocks
Herbivore.prototype.hidden = false;

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore instanceof Herbivore && herbivore.hidden !== true) {
      herbivore.health -= 50;

      if (herbivore.health === 0) {
        Animal.alive.splice(Animal.alive.indexOf(herbivore), 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
