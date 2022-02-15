'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

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
    if (this.hidden === true) {
      this.hidden = false;
    } else {
      this.hidden = true;
    }
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore
    && animal.hidden === false) {
      animal.health -= 50;
    }

    Animal.alive = Animal.alive.filter((x) => x.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
