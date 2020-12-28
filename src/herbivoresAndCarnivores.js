'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = !this.hidden;
  }

  bite(animal) {
    if (animal instanceof Herbivore && animal.hidden === false) {
      animal.health -= 50;
    }

    if (animal.health < 1) {
      Animal.alive.splice(Animal.alive.indexOf(animal), 1);
    }
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }
}

class Carnivore extends Animal {

}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
