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
  bite(herb) {
    if (herb.hidden === false) {
      herb.health -= 50;

      if (herb.health === 0) {
        Animal.alive = Animal.alive.filter(animal => animal !== herb);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
