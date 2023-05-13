'use strict';

class Animal {
  static addAnimalToAliveList(animal) {
    this.alive.push(animal);
  };

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.addAnimalToAliveList(this);
  };
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  };

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;

      if (animal.health === 0) {
        const animalWithZeroHealth
          = Animal.alive.findIndex(zeroAnimal => zeroAnimal.health === 0);

        Animal.alive.splice(animalWithZeroHealth, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
