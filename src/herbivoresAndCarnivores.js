'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

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
  bite(animal) {
    if (animal instanceof Herbivore) {
      const an = Animal.alive.findIndex(obj => obj === animal);

      if (an && animal.hidden === false) {
        Animal.alive[an].health -= 50;
      }

      if (Animal.alive[an].health === 0) {
        Animal.alive.splice(an, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
