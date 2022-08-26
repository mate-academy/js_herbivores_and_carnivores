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
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && animal.hidden === false) {
      animal.health -= 50;

      if (animal.health === 0) {
        const indexDethAnimal = Animal.alive.indexOf(animal);

        Animal.alive.splice(indexDethAnimal, 1);

        // ⚰️ 😿🙈
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
