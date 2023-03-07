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

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;
    }
    Animal.checkIsAlive();
  }
}

Animal.alive = [];

Animal.checkIsAlive = function() {
  Animal.alive = Animal.alive.filter(beast => beast.health > 0);
};

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
