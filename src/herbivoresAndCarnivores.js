'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    if (this.hidden) {
      this.hidden = false;
    } else {
      this.hidden = true;
    }
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (!animal.hidden && animal instanceof Herbivore) {
      animal.health -= 50;
    }

    if (animal.health <= 0) {
      const deadAnimalIndex = Animal.alive.indexOF(animal);

      Animal.alive.splice(deadAnimalIndex, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
