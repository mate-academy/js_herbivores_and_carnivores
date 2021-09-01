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
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(targetObj) {
    const animalIndex = Animal.alive.findIndex((animalObj) => {
      if (animalObj === targetObj
        && targetObj instanceof Herbivore
        && animalObj.hidden === false) {
        animalObj.health -= 50;

        return true;
      }
    });

    if (targetObj.health === 0) {
      Animal.alive.splice(animalIndex, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
