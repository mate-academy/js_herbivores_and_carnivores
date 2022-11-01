'use strict';

class Animal {
  // write your code here
  static alive = [];

  static addAnimal(animal) {
    this.alive.push(animal);
  }

  static removeAnimal(animal) {
    const indexOfAnimal = this.alive.indexOf(animal);

    if (indexOfAnimal !== -1) {
      this.alive.splice(indexOfAnimal, 1);
    }
  }

  constructor(name) {
    this.name = name;
    this.health = 100;
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    this.hidden = false;
    Animal.addAnimal(this);
  }

  hide() {
    this.hidden = this.hidden ? 0 : true;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    Animal.addAnimal(this);
  }
  bite(herbivore) {
    if (!herbivore.hidden && herbivore.constructor === Herbivore) {
      herbivore.health -= 50;
    }

    if (herbivore.health === 0) {
      Animal.removeAnimal(herbivore);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
