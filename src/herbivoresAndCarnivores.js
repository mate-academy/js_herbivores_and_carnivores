'use strict';

class Animal {
  // write your code here
  static alive = [];
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(animal) {
    if (animal instanceof Carnivore || animal.hidden) {
      return;
    }
    animal.health = animal.health - 50;

    if (animal.health <= 0) {
      Animal.alive = Animal.alive.filter((currentAnimal) => {
        return currentAnimal !== animal;
      });
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
