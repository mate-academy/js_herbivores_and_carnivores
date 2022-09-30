'use strict';

class Animal {
  static alive = [];
  constructor(name) {
    this.name = name;
    this.health = 100;
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
  bite(herbivore) {
    const currentAnimal = Animal.alive.find(animal => animal === herbivore);

    if (currentAnimal.hidden !== undefined && currentAnimal.hidden !== true) {
      currentAnimal.health -= 50;
    }

    if (currentAnimal.health <= 0) {
      Animal.alive = Animal.alive.filter(animal => animal !== currentAnimal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
