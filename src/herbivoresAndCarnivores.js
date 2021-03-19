'use strict';

class Animal {
  // write your code here
  constructor(animal, health = 100) {
    this.animal = animal;
    this.health = health;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(item, hidden) {
    super(item);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;

      if (animal.health === 0) {
        const index = Animal.alive
          .findIndex(nextAnimal => nextAnimal === animal);

        if (index !== -1) {
          Animal.alive.splice(index, 1);
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
