'use strict';
class Animal {
  static alive = [];
  constructor(name) {
    this.health = 100;
    this.name = name;
    Animal.alive.push(this);
  }
  static deleteIndex = Animal.alive.findIndex((animal) => animal.health <= 0);

  deleteAnimal() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

class Herbivore extends Animal {
  constructor(name, hidden = false) {
    super(name);
    this.hidden = hidden;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal.hidden === false && animal instanceof Herbivore) {
      animal.health -= 50;
    }

    if (animal.health <= 0) {
      animal.deleteAnimal();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
