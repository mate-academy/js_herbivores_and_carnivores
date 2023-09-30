'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.ALIVE.push(this);
  }

  die() {
    const index = Animal.ALIVE.indexOf(this);

    if (index !== -1) {
      Animal.ALIVE.splice(index, 1);
    }
  }
}

Animal.ALIVE = [];

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
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;

      if (animal.health <= 0) {
        animal.die();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
