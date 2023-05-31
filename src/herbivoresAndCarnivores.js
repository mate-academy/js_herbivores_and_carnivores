'use strict';

class Animal {
  // write your code here
  static addAnimal(animal) {
    this.alive.push(animal);
  }

  static removeAnimal(animal) {
    const animalIndex = this.alive.findIndex(el => el === animal);

    this.alive.splice(animalIndex, 1);
  }

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.addAnimal(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  // write your code here
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(target) {
    if (target instanceof Herbivore) {
      if (target.hidden === false) {
        target.health -= 50;

        if (target.health <= 0) {
          Animal.removeAnimal(target);
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
