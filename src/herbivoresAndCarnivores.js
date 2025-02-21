'use strict';

class Animal {
  static alive = [];
  health = 100;
  name;
}

class Herbivore extends Animal {
  hidden = false;

  constructor(name) {
    super();
    this.name = name;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super();
    this.name = name;
    Animal.alive.push(this);
  }

  bite(animal) {
    if (animal instanceof Herbivore) {
      if (animal.hidden !== true && animal.health >= 50) {
        animal.health = animal.health - 50;
      }

      Animal.alive = Animal.alive.filter((item) => item.health > 0);

    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
