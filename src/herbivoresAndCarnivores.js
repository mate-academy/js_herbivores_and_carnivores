'use strict';

class Animal {
  static alive = [];

  static removeDeadAnimal() {
    const deadAnimal = Animal.alive.find(animal => (
      animal.health === 0
    ));

    const index = Animal.alive.findIndex(animal => (
      animal === deadAnimal
    ));

    Animal.alive.splice(index, 1);
  }

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);

    this.hidden = false;
  }

  hide() {
    if (this.hidden === true) {
      this.hidden = false;
    } else {
      this.hidden = true;
    }
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && animal.hidden === false) {
      animal.health -= 50;

      Animal.removeDeadAnimal();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
