'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;

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
  bite(animalBitten) {
    if (!(animalBitten instanceof Carnivore) && animalBitten.hidden === false) {
      animalBitten.health -= 50;

      if (animalBitten.health <= 0) {
        const filteredAnimals = Animal.alive.filter(
          (animal) => animal !== animalBitten,
        );

        Animal.alive = filteredAnimals;
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
