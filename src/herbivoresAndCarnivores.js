'use strict';

class Animal {
  // write your code here
  static alive = [];

  static addAnimal(animal) {
    this.alive.push(animal);
  }

  static removeAnimal() {
    this.alive = this.alive.filter(animal => animal.health > 0);
  }

  constructor(name) {
    this.health = 100;
    this.name = name;
    Animal.addAnimal(this);
  }
}

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
  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= 50;
    }

    if (herbivore.health <= 0) {
      Animal.removeAnimal(herbivore);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
