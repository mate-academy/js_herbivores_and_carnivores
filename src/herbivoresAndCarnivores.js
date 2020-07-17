'use strict';

class Animal {
  // write your code here
  constructor(name) {
    this.name = name;
    this.health = 100;
  }

  static addAnimal(animal) {
    this.alive.push(animal);
  }

  static removeAnimal(dead) {
    this.alive = this.alive.filter(animal => animal !== dead);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    this.hidden = false;

    Animal.addAnimal(this);
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    Animal.addAnimal(this);
  }

  bite(name) {
    const damage = 50;

    if (name instanceof Herbivore && !name.hidden) {
      name.health -= damage;

      if (!name.health) {
        Animal.removeAnimal(name);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
