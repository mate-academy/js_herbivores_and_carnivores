'use strict';

class Animal {
  static alive = [];

  static removeAnimal() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }

  constructor(name) {
    this.health = 100;
    this.name = name;

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
  bite(obj) {
    if (!obj.hidden && obj instanceof Herbivore) {
      obj.health -= 50;
      Animal.removeAnimal();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
