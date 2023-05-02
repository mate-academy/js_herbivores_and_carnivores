'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
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
  bite(nameAnimal) {
    if (!nameAnimal.hidden && nameAnimal instanceof Herbivore) {
      nameAnimal.health -= 50;
    }

    Animal.alive = Animal.alive.filter(animal => animal !== nameAnimal);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
