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
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    const findedAnimal = Animal.alive.find(item => item === target);
    const findedAnimalIndex = Animal.alive.indexOf(findedAnimal);

    if (findedAnimal.hidden === true || findedAnimal instanceof Carnivore) {
      return;
    }

    findedAnimal.health -= 50;

    if (findedAnimal.health === 0) {
      Animal.alive.splice(findedAnimalIndex, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
