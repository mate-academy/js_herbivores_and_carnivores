'use strict';

class Animal {
  static killAnimal(animal) {
    delete Animal.alive[Animal.alive.indexOf(animal)];
  }

  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(prey) {
    if (!prey.hidden && prey instanceof Herbivore) {
      prey.health -= 50;
    }

    if (prey.health < 1) {
      Animal.killAnimal(prey);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
