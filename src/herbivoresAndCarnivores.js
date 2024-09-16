'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }

  static removeAnimal() {
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
    if (
      animal instanceof Carnivore ||
      (animal instanceof Herbivore && animal.hidden)
    ) {
      return;
    }

    animal.health -= 50;

    if (animal.health <= 0) {
      Animal.removeAnimal();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
