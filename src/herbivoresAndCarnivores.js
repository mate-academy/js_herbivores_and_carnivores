'use strict';

class Animal {
  static alive = [];
  health = 100;
  constructor(animal) {
    this.animal = animal;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(animal) {
    super(animal);
    this.hidden = false;
  }

  hide() {
    if (!this.hidden) {
      this.hidden = !this.hidden;
    } else if (this.hidden) {
      this.hidden = !this.hidden;
    }
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (!animal.hidden
      && animal instanceof Herbivore) {
      animal.health -= 50;
    }

    if (animal.health === 0) {
      Animal.alive = Animal.alive.filter((item) => item !== animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
