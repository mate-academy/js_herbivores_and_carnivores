'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.health = 100;
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    this.health = 100;
  }

  bite(prey) {
    if (prey.hidden !== undefined && prey.hidden !== true) {
      prey.health -= 50;

      if (prey.health === 0) {
        Animal.alive = Animal.alive.filter(item => item.health !== 0);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
