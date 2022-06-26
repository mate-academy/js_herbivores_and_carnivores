'use strict';

class Animal {
  constructor() {
    this.health = 100;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super();
    this.name = name;
    this.hidden = false;

    Animal.alive.push(this);
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super();
    this.name = name;

    Animal.alive.push(this);
  }

  bite(herb) {
    if (herb.hidden === false) {
      herb.health -= 50;
    }

    if (herb.health === 0) {
      Animal.alive.splice(
        Animal.alive.indexOf(herb),
        1
      );
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
