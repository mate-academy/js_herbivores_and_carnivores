'use strict';

class Animal {
  health = 100;
  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }

  static alive = [];
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  };
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal.hidden === false && animal instanceof Herbivore) {
      animal.health -= 50;
    }

    Animal.alive = Animal.alive.filter(beast => beast.health > 0);
  };
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
