'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }
  deleteAnimal(animal) {
    for (let index = 0; index < animal.length; index++) {
      if (animal[index].health <= 0) {
        animal.splice(index, 1);
      }
    }
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivoreAnimal) {
    if (herbivoreAnimal instanceof Herbivore && !herbivoreAnimal.hidden) {
      herbivoreAnimal.health -= 50;
      super.deleteAnimal(Carnivore.alive);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
