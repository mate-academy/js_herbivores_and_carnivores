'use strict';

class Animal {
  static alive = [];

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
    if (!(animal instanceof Carnivore || animal.hidden)) {
      animal.health -= 50;
    }

    if (animal.health <= 0) {
      Animal.alive.filter((item) => {
        if (item === animal) {
          const index = Animal.alive.indexOf(animal);

          Animal.alive.splice(index, 1);
        }
      });
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
