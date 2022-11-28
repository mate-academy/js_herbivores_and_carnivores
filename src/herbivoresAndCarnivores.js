'use strict';

class Animal {
  // write your code here
  static addAnimal(animal) {
    if (!Animal.alive) {
      Animal.alive = [];
    }

    this.alive.push(animal);
  }

  static removeAnimal(prey) {
    const animal = Animal.alive.indexOf(prey);

    if (animal) {
      this.alive.splice(animal, 1);
    }
  }

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.addAnimal(this);
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here

  bite(prey) {
    if (!(prey instanceof Carnivore) && !(prey.hidden)) {
      prey.health -= 50;
    }

    if (prey.health <= 0) {
      Animal.removeAnimal(prey);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
