'use strict';

class Animal {
  static alive = [];

  static addAnimal(animal) {
    this.alive.push(animal);
  }

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;

    Animal.addAnimal(this);
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    const isHerbivore = animal instanceof Herbivore;
    const isHidden = animal.hidden;

    if (isHerbivore && !isHidden) {
      animal.health -= 50;

      if (!animal.health) {
        Animal.alive = Animal.alive.filter(
          (aliveAnimal) => !!aliveAnimal.health,
        );
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
