'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;

    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);

    Animal.alive.push(this);
  }

  bite(herbivoreAnimal) {
    if (herbivoreAnimal.hidden === false) {
      herbivoreAnimal.health -= 50;

      if (herbivoreAnimal.health === 0) {
        Animal.alive.splice(Animal.alive.indexOf(
          item => item.name === herbivoreAnimal.name
        ), 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
