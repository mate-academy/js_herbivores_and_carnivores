'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }
  static removeAnimal(dead) {
    Animal.alive = Animal.alive.filter(animal => animal !== dead);
  }
}
Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
    Animal.alive.push(this);
  }
  hide() {
    this.hidden = true;
  }
  // write your code here
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }
  bite(name) {
    if (name instanceof Herbivore && name.hidden === false) {
      name.health -= 50;
    }

    if (name.health === 0) {
      Animal.removeAnimal(name);
    }
  }
  // write your code here
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
