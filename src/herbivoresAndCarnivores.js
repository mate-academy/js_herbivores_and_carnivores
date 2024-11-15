'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  animalType = 'herbivore';

  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  animalType = 'carnivore';

  constructor(name, health = 100) {
    super(name, health);
  }

  bite(animal) {
    if (
      animal.animalType === 'herbivore' &&
      animal.hidden === false &&
      Animal.alive.includes(animal)
    ) {
      if (animal.animalType === 'herbivore' && animal.hidden === false) {
      animal.health -= 50;

      if (animal.health <= 0) {
        Animal.alive = Animal.alive.filter(aliveAnimal => aliveAnimal !== animal);
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
