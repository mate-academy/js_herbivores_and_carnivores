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
    if (herb instanceof Herbivore && herb.hidden === false) {
      herb.health -= 50;
    }

    // const herbIndex = Animal.alive.findIndex(animal => animal === herb);

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
