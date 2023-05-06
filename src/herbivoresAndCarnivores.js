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
    this.hidden = true;

    return this;
  }
}

class Carnivore extends Animal {
  bite(some) {
    if (some instanceof Herbivore && some.hidden === false) {
      some.health = some.health - 50;
    }

    for (let i = 0; i <= Animal.alive.length - 1; i++) {
      const { health } = Animal.alive[i];

      if (health <= 0) {
        Animal.alive.splice(i, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
