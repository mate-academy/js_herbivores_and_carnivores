'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
  }

  addAnimalToData(objToAdd) {
    Animal.alive.push(objToAdd);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;

    super.addAnimalToData(this);
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);

    super.addAnimalToData(this);
  }

  bite(targetObj) {
    const animalIndex = Animal.alive.findIndex((animalObj) => {
      if (animalObj === targetObj
        && targetObj.__proto__.constructor.name === 'Herbivore'
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
