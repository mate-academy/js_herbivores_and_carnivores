/* eslint-disable no-useless-constructor */
'use strict';

class Animal {
  // write your code here
  static addAnimal(animal) {
    this.alive.push(animal);
  }

  constructor(name) {
    this.health = 100;
    this.name = name;
    Animal.addAnimal(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
  }

  bite(name) {
    if (name instanceof Herbivore && !name.hidden) {
      name.health -= 50;
    }

    if (name.health <= 0) {
      const index = Animal.alive.indexOf(name);

      Animal.alive.splice(index, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
