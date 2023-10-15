'use strict';

class Animal {
  static addAnimal(animal) {
    this.alive.push(animal);
  }
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.addAnimal(this);
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
  bite(name) {
    if (name.hidden === false && name instanceof Herbivore) {
      name.health -= 50;
    }

    if (name.health <= 0) {
      Animal.alive = Animal.alive.filter((el) => el !== name);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
