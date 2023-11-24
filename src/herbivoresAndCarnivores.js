'use strict';

class Animal {
  static alive = [];
  health = 100;
}

class Herbivore extends Animal {
  hidden = false;

  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }

  hide() {
    if (this.hidden) {
      this.hidden = false;
    } else {
      this.hidden = true;
    }
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }

  bite(animal) {
    if (animal.hasOwnProperty('hidden') && animal.hidden === false) {
      animal.health -= 50;

      if (animal.health <= 0) {
        const index = Animal.alive
          .findIndex((currentAnimal) => currentAnimal === animal);

        if (index >= 0) {
          Animal.alive.splice(index, 1);
        }
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
