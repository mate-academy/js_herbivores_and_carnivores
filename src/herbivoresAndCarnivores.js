'use strict';

class Animal {
  static removeDeadAnimals(animal) {
    Animal.alive = Animal.alive.filter((deadAnimal) => {
      return deadAnimal.name !== animal.name;
    });
  }
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
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
  bite(animal) {
    if (!animal.hidden && !(animal instanceof Carnivore)) {
      animal.health -= 50;
    }

    if (animal.health <= 0) {
      Animal.removeDeadAnimals(animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
