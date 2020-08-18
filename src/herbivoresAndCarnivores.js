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
    if (!(herb instanceof Carnivore) && !herb.hidden) {
      herb.health -= 50;
    }

    if (herb.health === 0) {
      Animal.alive.splice(Animal.alive.indexOf(herb), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
