'use strict';

class Animal {
  static alive = [];

  constructor (name, health) {
    this.name = name;
    this.health = health || 100;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100, isHidden) {
    super(name, health);

    this.hidden = isHidden || false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivoreAnimal) {
    if (herbivoreAnimal.hidden === false) {
      if (herbivoreAnimal.health === 50) {
        Animal.alive.splice(Animal.alive.indexOf(herbivoreAnimal, 1));
      }
      herbivoreAnimal.health -= 50;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
