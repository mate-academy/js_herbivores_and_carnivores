'use strict';

class Animal {
  constructor({ health = 100, name }) {
    this.health = health;
    this.name = name;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor({ health = 100, name, hidden = false }) {
    super(health, name);

    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore
      && animal.hidden === false) {
      animal.health -= 50;

      if (animal.health === 0) {
        const indexOfANimal = Animal.alive.indexOf(animal);

        Animal.alive.splice(indexOfANimal, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
