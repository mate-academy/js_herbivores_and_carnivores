'use strict';

class Animal {
  static alive = [];

  static addAnimal(obj) {
    Animal.alive.push(obj);
  }

  static deadAnimal() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.addAnimal(this);
    Animal.deadAnimal();
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
    if (obj instanceof Herbivore && obj.hidden === false) {
      obj.health -= 50;
    }
    Animal.deadAnimal();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
