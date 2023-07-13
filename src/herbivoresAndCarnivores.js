'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  static removeDeadAnimals() {
    this.alive = this.alive.filter(animal => animal.health > 0);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, hidden = false) {
    super(name);
    this.hidden = hidden;
  }

  hide() {
    if (!this.hidden) {
      this.hidden = true;
    }
  };
};

class Carnivore extends Animal {
  bite(animal) {
    if (!animal.hidden && animal instanceof Herbivore) {
      animal.health -= 50;
    }

    if (animal.health <= 0) {
      Animal.removeDeadAnimals();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
