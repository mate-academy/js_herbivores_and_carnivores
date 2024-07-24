'use strict';

const DEFOULT_HEALTH = 100;
const BITE_COUNT = 50;

class Animal {
  constructor(name, health = DEFOULT_HEALTH) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
  static removeAnimal() {
    Animal.alive = Animal.alive.filter((animalItem) => animalItem.health > 0);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && animal.hidden === false) {
      animal.health -= BITE_COUNT;

      if (animal.health <= 0) {
        Animal.removeAnimal();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
