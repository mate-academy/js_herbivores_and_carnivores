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
    super(name, 100);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(harbivore) {
    if (!harbivore.hidden && !(harbivore instanceof Carnivore)) {
      harbivore.health -= 50;
    }

    if (harbivore.health === 0) {
      const item = Animal.alive.indexOf(harbivore);

      Animal.alive.splice(item, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
