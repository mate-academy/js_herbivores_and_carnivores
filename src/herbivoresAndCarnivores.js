'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  hide() {
    super.hide();
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (!this.hidden && animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;

      if (animal.health <= 0) {
        Animal.alive = Animal.alive.filter((item) => item !== animal);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
