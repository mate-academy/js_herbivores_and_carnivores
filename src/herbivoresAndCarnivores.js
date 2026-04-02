'use strict';

class Animal {
  static alive = [];
  name;
  health;
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hidden;
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
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;
    }

    // if (animal instanceof Carnivore) {
    //   animal.health -= 50;
    // }

    if (animal.health <= 0) {
      const filteredAnimals = Animal.alive.filter((item) => item !== animal);

      Animal.alive = filteredAnimals;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
