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
    const eatenAnimal = herbivoreAnimal;

    if (!eatenAnimal.hidden && !(eatenAnimal instanceof Carnivore)) {
      eatenAnimal.health -= 50;

      if (eatenAnimal.health <= 0) {
        Animal.alive.splice(Animal.alive.indexOf(eatenAnimal), 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
