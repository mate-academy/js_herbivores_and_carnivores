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
    this.hidden = true;
    Animal.alive.push(this);
  }

  bite(animal) {
    if ((animal.hidden === false) && (animal instanceof Herbivore)) {
      animal.health -= 50;
    }
    Animal.alive = Animal.alive.filter(an => an.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
