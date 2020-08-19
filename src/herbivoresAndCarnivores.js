'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hidden = false;
    Animal.alive.push(this);
  }
}
Animal.alive = [];

class Herbivore extends Animal {
  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(exemplar) {
    if (!exemplar.hidden && exemplar.__proto__ !== Carnivore.prototype) {
      exemplar.health -= 50;

      if (exemplar.health) {
        Animal.alive.splice(Animal.alive.indexOf(exemplar), 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
