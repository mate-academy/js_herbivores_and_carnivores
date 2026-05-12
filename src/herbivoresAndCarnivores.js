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
    // Не кусаємо хижаків
    if (animal instanceof Carnivore) {
      return;
    }

    // Не кусаємо прихованих травоїдних
    if (animal.hidden) {
      return;
    }

    animal.health -= 50;

    // Якщо тварина померла
    if (animal.health <= 0) {
      if (animal.health <= 0) {
        Animal.alive = Animal.alive.filter((a) => a !== animal);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
