'use strict';

class Animal {
  static addAnimal(animals) {
    this.alive.push(animals);
  }
  static removeAnimal(animals) {
    Animal.alive = Animal.alive.filter(animal => animal !== animals);
  }
  constructor(name) {
    this.name = name;
    this.health = 100;
  }
}
Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
    Animal.addAnimal(this);
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.addAnimal(this);
  }
  bite(sombodyHerb) {
    if (sombodyHerb instanceof Herbivore && sombodyHerb.hidden !== true) {
      sombodyHerb.health = sombodyHerb.health - 50;
    }

    if (sombodyHerb.health === 0) {
      Animal.removeAnimal(sombodyHerb);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
