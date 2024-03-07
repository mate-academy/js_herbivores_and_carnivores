'use strict';

class Animal {
  static alive = [];
}

class Herbivore extends Animal {
  constructor(name) {
    super();
    this.name = name;
    this.health = 100;
    this.hidden = false;
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
    this.health = 100;
    Animal.alive.push(this);
  }

  bite(animal) {
    if (animal instanceof Herbivore && animal.hidden !== true) {
      animal.health -= 50;
    }

    Animal.alive = Animal.alive.filter((item) => item.health !== 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
