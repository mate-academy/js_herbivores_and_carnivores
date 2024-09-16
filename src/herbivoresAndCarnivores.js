'use strict';

class Animal {
  static alive = [];

  static addElement(animal) {
    this.alive.push(animal);
  }

  constructor(name, health = 100, hidden = false) {
    this.name = name;
    this.health = health;
    this.hidden = hidden;
    Animal.addElement(this);
  }
}

class Herbivore extends Animal {
  static addElement(herbivore) {
    Animal.alive.push(herbivore);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  static addElement(carnivore) {
    Animal.alive.push(carnivore);
  }

  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;
    }

    if (animal.health <= 0) {
      Animal.alive = Animal.alive.filter((item) => item !== animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
