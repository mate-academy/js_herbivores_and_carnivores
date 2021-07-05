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
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(exemplar) {
    if (!exemplar.hidden && !(exemplar instanceof Carnivore)) {
      exemplar.health -= 50;

      if (exemplar.health === 0) {
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
