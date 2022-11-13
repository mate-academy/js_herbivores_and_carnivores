'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.addAnimal(this);
  }

  removeAnimal(herbivore) {
    Animal.alive = Animal.alive.filter(animal => animal !== herbivore);
  }

  static addAnimal(animal) {
    Animal.alive.push(animal);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);

    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (!herbivore.hidden && herbivore instanceof Herbivore) {
      herbivore.health -= 50;
    }

    if (herbivore.health <= 0) {
      this.removeAnimal(herbivore);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
