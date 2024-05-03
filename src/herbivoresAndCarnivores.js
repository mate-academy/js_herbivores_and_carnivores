'use strict';

class Animal {
  static animalArr = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.animalArr.push(this);
  }

  static get alive() {
    return Animal.animalArr;
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      const animalIndex = Animal.animalArr.findIndex((herb) => herb === animal);

      if (animalIndex !== -1) {
        if (Animal.animalArr[animalIndex].health > 50) {
          Animal.animalArr[animalIndex].health -= 50;
        } else {
          Animal.animalArr.splice(animalIndex, 1);
        }
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
