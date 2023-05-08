'use strict';

class Animal {
  static animalAlive(animal) {
    this.alive.push(animal);
  }

  constructor(name, health) {
    this.name = name;
    this.health = health || 100;

    Animal.animalAlive(this);
  }
}

Animal.alive = [];
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
    if (animal instanceof Herbivore && animal.hidden === false) {
      animal.health -= 50;

      Animal.alive = Animal.alive
        .filter(stillAliveAnimal => stillAliveAnimal.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
