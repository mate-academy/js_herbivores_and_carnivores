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
    if (this.hidden) {
      this.hidden = false;
    } else {
      this.hidden = true;
    }
  }
}

class Carnivore extends Animal {
  bite(aHerbivore) {
    if (aHerbivore instanceof Herbivore && !aHerbivore.hidden) {
      aHerbivore.health -= 50;
    }

    if (!aHerbivore.health) {
      Animal.alive = Animal.alive
        .filter(animal => animal.name !== aHerbivore.name);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
