'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hidden = false;
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    const isHerbivore = herbivore instanceof Herbivore;

    if (herbivore.hidden !== true && isHerbivore) {
      herbivore.health -= 50;
    }

    if (herbivore.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== herbivore);
    }

    Animal.alive = Animal.alive.map((animal) => {
      if (Object.hasOwn(animal, 'hidden') && animal.hidden !== true) {
        delete animal.hidden;
      }

      return animal;
    });
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
