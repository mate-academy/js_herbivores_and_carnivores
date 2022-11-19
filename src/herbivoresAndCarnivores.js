'use strict';

class Animal {
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

Animal.alive = [];

class Carnivore extends Animal {
  bite(herbivoreAnimal) {
    if (!herbivoreAnimal.hidden && !(herbivoreAnimal instanceof Carnivore)) {
      herbivoreAnimal.health -= 50;

      if (herbivoreAnimal.health <= 0) {
        Animal.alive = Animal.alive.filter(item => item !== herbivoreAnimal);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
