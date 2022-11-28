'use strict';

class Animal {
  static addAnimal(animal) {
    this.alive.push(animal);
  }

  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.addAnimal(this);
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
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;
    }

    if (animal.health <= 0) {
      Animal.alive = Animal.alive.filter((an) => an.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
