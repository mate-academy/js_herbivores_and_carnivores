'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    if (!Array.isArray(Animal.alive)) {
      Animal.alive = [];
    }
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
    if (animal instanceof Carnivore || animal.hidden) {
      return;
    }
    animal.health -= 50;

    if (animal.health <= 0) {
      const index = Animal.alive.indexOf(animal);

      if (index > -1) {
        Animal.alive.splice(index, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
