'use strict';

class Animal {
  static alive = [];
  health = 100;

  constructor(name) {
    this.name = name;

    Animal.alive.push(this);
  }

  bite(animal) {
    if (this instanceof Carnivore && animal.hidden === false) {
      animal.health -= 50;

      if (animal.health <= 0 && Animal.alive.indexOf(animal) >= 0) {
        Animal.alive.splice(Animal.alive.indexOf(animal), 1);
      }
    }
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    this.name = name;
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.name = name;
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
