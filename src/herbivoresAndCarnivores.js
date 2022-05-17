'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

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
  bite(herbObj) {
    if (herbObj instanceof Herbivore && herbObj.hidden === false) {
      herbObj.health -= 50;
      Animal.alive = Animal.alive.filter(animal => animal.health <= 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
