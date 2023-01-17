'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

Animal.remove = function() {
  Animal.alive = Animal.alive.filter((obj) => obj.health !== 0);
};

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
    if (!animal.hidden && (animal instanceof Carnivore) === false) {
      animal.health -= 50;
    }

    if (animal.health === 0) {
      Animal.remove();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
