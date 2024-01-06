'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(object) {
    if ((object instanceof Herbivore) && (object.hidden === false)) {
      object.health -= 50;
    }

    const indexToRemove = Animal.alive.findIndex(animal => animal.health <= 0);

    if (indexToRemove !== -1) {
      Animal.alive.splice(indexToRemove, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
