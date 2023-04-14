'use strict';
class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
  static deleteAnimal(herbivore) {
    this.alive = this.alive.filter((animal) => animal !== herbivore);
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
    if (animal.hasOwnProperty('hidden') && !animal.hidden) {
      animal.health -= 50;

      if (animal.health <= 0) {
        Animal.deleteAnimal(animal);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
